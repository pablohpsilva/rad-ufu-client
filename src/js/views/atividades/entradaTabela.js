define([

    "models/atividade",
    "text!templates/atividades/entradaTabela.html"

    ],  function(AtividadeModel, atividadeTpl) {

        var AtividadeEntradaTabelaView = Backbone.View.extend({

            tagName : "tr",

            render : function() {

                var data = this.model.toJSON();

                //ugly
                data.comprovantes = data.comprovantes.toJSON();
                data.tipo         = data.tipo.toJSON();
                data.tipo.categoria = data.tipo.categoria.toJSON();
                data.tipo.multiplicadores = data.tipo.multiplicadores.toJSON();

                this.$el.html(_.template(atividadeTpl, data));

                return this;

            }

        });

        return AtividadeEntradaTabelaView;
});