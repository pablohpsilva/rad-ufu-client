define([

    "views/atividades/cadastro/comprovantes"

    ], function (ComprovanteCadastroView) {

        var ComprovanteEdicaoView = ComprovanteCadastroView.extend({

            events: _.extend({
                "click li.atual i.icon-remove": "removeAtual"
            }, ComprovanteCadastroView.prototype.events),

            render: function () {
                var data = {};

                data.atuais       = [];
                data.selecionados = this.selecionados;
                //
                // Se já existem comprovantes para a atividade, busca os comprovantes
                // na collection
                //
                data.atuais = this.collection.chain()
                    .filter(function (c) {
                        return _.contains(this.options.atuais, c.id);
                    }, this)
                    .map(function (c) {
                        return c.toJSON();
                    }).value();


                this.$el.html(_.template(this.tpl, data));
                // inicializa os tooltips
                this.$("[rel=\"tooltip\"]").tooltip();

                //console.log(data.atuais);
                return this;
            },

            atualizaSelecionados: function () {
                var files;

                //
                // Verifica se existem comprovantes atuais com o nome 'nome'
                //
                function contemArquivo (collection, nome, thisView) {
                    var contem = collection.chain()
                        .filter(function (c) {
                            return _.contains(thisView.options.atuais, c.id) && nome === c.get("nome");
                        })
                        .value();
                    if (!_.isEmpty(contem)) return true;
                    return false;
                }

                files = $("#comprovantes")[0].files;
                console.log("atualizando arquivos selecionados");
                //console.log(files);

                _.each(files, function (f) {
                    if(!contemArquivo(this.collection, f.name, this))
                        this.selecionados[f.name] = f;
                    else
                        console.log("Arquivo já existente não adicionado");
                }, this);

                //console.log("selecionados", this.selecionados);

                this.$el.empty();
                this.render();

            },

            preparaDados: function (dadosEdicao) {
                if(_.isEmpty(this.options.atuais) &&
                   _.isEmpty(this.selecionados))
                    dadosEdicao.err.push("Selecione um arquivo comprovante");

                dadosEdicao.atuais       = this.options.atuais;
                dadosEdicao.selecionados = this.selecionados;
            },

            removeAtual: function (ev) {
                console.log("removendo do atual:", this.options.atuais);
                var el = this.$(ev.target);
                this.options.atuais = _.without(this.options.atuais, el.data("id"));
                el.parent("li").remove();
                console.log("atual:", this.options.atuais);
            }
        });

        return ComprovanteEdicaoView;
});