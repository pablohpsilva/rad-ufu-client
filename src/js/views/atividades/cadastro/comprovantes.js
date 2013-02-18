define([

    "text!templates/atividades/cadastro/comprovantes.html",
    "collections/comprovante"

    ],  function (comprovantesTpl, comprovanteCollection) {

        var comprView = Backbone.View.extend({

            events: {
                "click #addComprovante": "clickInput",
                "change #comprovantes": "atualizaSelecionados"
            },

            initialize: function () {
                this.selecionados = {};
                //console.log(this.selecionados);
            },

            render: function () {
                var data = {};

                data.atuais       = [];
                data.selecionados = this.selecionados;
                //
                // Se já existem comprovantes para a atividade, busca os comprovantes
                // na collection
                //
                if (this.options.atuais)
                    data.atuais = comprovanteCollection.chain()
                        .filter(function (c) {
                            return _.contains(this.options.atuais, c.id);
                        }, this)
                        .map(function (c) {
                            return c.toJSON();
                        }).value();

                this.$el.html(_.template(comprovantesTpl, data));
                // inicializa os tooltips
                this.$("[rel=\"tooltip\"]").tooltip();

                //console.log(data.atuais);
                return this;
            },

            atualizaSelecionados: function () {
                var files;

                files = $("#comprovantes")[0].files;
                console.log("atualizando arquivos selecionados");
                //console.log(files);

                _.each(files, function (f) {
                    this.selecionados[f.name] = f;
                }, this);

                //console.log("selecionados", this.selecionados);

                this.$el.empty();
                this.render();

            },

            clickInput: function () {
                this.$("#comprovantes").click();
            }
        });

        return comprView;
});