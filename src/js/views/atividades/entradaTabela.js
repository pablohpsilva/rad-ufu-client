define([

    "models/atividade",
    "text!templates/atividades/entradaTabela.html"

    ],  function(AtividadeModel, atividadeTpl) {

        var AtividadeEntradaTabelaView = Backbone.View.extend({

            tagName : "tr",

            events: {
                "hover": "toggleControles"
            },

            toggleControles: function () {
                this.$("i").toggleClass("invisivel");
            },

            render : function() {
                this.$el.html(_.template(atividadeTpl, this.model));
                return this;
            }
        });

        return AtividadeEntradaTabelaView;
});