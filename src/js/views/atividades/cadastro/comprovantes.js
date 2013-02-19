define([

    "text!templates/atividades/cadastro/comprovantes.html",
    "collections/comprovante"

    ],  function (comprovantesTpl, comprovanteCollection) {

        var comprView = Backbone.View.extend({

            collection: comprovanteCollection,

            tpl: comprovantesTpl,

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

                data.atuais = [];
                data.selecionados = this.selecionados;

                this.$el.html(_.template(comprovantesTpl, data));
                // inicializa os tooltips
                this.$("[rel=\"tooltip\"]").tooltip();
                this.registraHovers();

                //console.log(data.atuais);
                return this;
            },

            registraHovers: function () {
                this.$(".selecionado").hover(
                    function() {
                        $(this).find(".icon-remove").removeClass("invisivel");
                    },
                    function() {
                        $(this).find(".icon-remove").addClass("invisivel");
                });

                this.$(".atual").hover(
                    function() {
                        $(this).find(".icon-remove").removeClass("invisivel");
                    },
                    function() {
                        $(this).find(".icon-remove").addClass("invisivel");
                });
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

            resetDados: function () {
                this.selecionados = [];
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