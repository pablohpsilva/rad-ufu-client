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
                "click li i.icon-remove": "removeAtividade"
            },

            removeAtividade: function (ev) {
                var id = this.$(ev.target).data("id-atividade");
                console.log("removendo atividade com id:", id);
                atividadeCollection.remove(id);
            },

            render : function() {
                var valor = tipoCollection.get(this.model.tipo)
                        .get("pontuacao");

                this.model.pontuacao = this.model.valorMult * valor;

                this.$el.html(_.template(atividadeTpl, this.model));

                // inicializa os tooltips
                this.$("[rel=\"tooltip\"]").tooltip();

                return this;
            }
        });

        return AtividadeEntradaTabelaView;
});