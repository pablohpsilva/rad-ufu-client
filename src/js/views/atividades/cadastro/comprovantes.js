define([

    "text!templates/atividades/cadastro/comprovantes.html",
    "collections/comprovante"

    ],  function (comprovantesTpl, comprovanteCollection) {

        var comprView = Backbone.View.extend({

            collection: comprovanteCollection,

            tpl: comprovantesTpl,

            events: {
                "click #addComprovante": "clickInput",
                "change #comprovantes": "atualizaSelecionados",
                "click li.selecionado i.icon-remove": "removeSelecionado"
            },

            initialize: function () {
                this.selecionados = {};
                //console.log(this.selecionados);
            },

            render: function () {
                var data = {};

                data.atuais = [];
                data.selecionados = this.selecionados;

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

            removeSelecionado: function (ev) {
                console.log("removendo selecionado");
                var el = this.$(ev.target);
                this.selecionados = _.omit(this.selecionados, el.data("name"));
                el.parent("li").remove();
                console.log("selecionados: ",this.selecionados);
            },

            resetDados: function () {
                this.selecionados = {};
                this.render();
            },

            preparaDados: function (dadosCadastro) {
                if (_.isEmpty(this.selecionados))
                    dadosCadastro.err.push("Selecione um arquivo comprovante");
                // nb: os objetos aninhados não são clonados
                dadosCadastro.comprovantes = _.clone(this.selecionados);
            },

            toggleRemove: function (e) {
                this.$(e.target).find(".icon-remove").toggleClass("invisivel");
            },

            clickInput: function () {
                this.$("#comprovantes").click();
            }
        });

        return comprView;
});