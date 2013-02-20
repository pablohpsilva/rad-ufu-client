define([

    "models/atividade",
    "collections/atividade",
    "collections/tipo",
    "collections/multiplicador",
    "text!templates/atividades/entradaTabela.html"

    ],  function(AtividadeModel, atividadeCollection, tipoCollection,
                 multiplicadorCollection,
                 atividadeTpl) {

        var AtividadeEntradaTabelaView = Backbone.View.extend({

            tagName : "tr",

            events: {
                "hover": "toggleControles",
                "click li i.icon-remove": "removeAtividade"
            },

            toggleControles: function () {
                this.$("i").toggleClass("invisivel");
            },

            removeAtividade: function (ev) {
                var id = this.$(ev.target).data("id-atividade");
                console.log("removendo atividade com id:", id);
                atividadeCollection.remove(id);
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