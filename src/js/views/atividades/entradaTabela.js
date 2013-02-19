define([

    "models/atividade",
    "collections/tipo",
    "collections/multiplicador",
    "text!templates/atividades/entradaTabela.html"

    ],  function(AtividadeModel, tipoCollection, multiplicadorCollection,
                 atividadeTpl) {

        var AtividadeEntradaTabelaView = Backbone.View.extend({

            tagName : "tr",

            events: {
                "hover": "toggleControles"
            },

            toggleControles: function () {
                this.$("i").toggleClass("invisivel");
            },

            render : function() {
                var mid = tipoCollection.get(this.model.tipo)
                        .get("multiplicador"),
                    valor = multiplicadorCollection.get(mid).get("valor");

                this.model.pontuacao = this.model.valorMult * valor;

                this.$el.html(_.template(atividadeTpl, this.model));
                return this;
            }
        });

        return AtividadeEntradaTabelaView;
});