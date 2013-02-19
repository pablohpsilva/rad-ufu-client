define([

    "collections/tipo",
    "collections/multiplicador",
    "text!templates/atividades/cadastro/multiplicador.html"

    ],  function(tCollection, multCollection, multTpl) {

        var MultiplicadorView = Backbone.View.extend({

            render : function(tipoId) {
                var data = {};
                var mid = tCollection.get(tipoId)
                        .get("multiplicador");

                data.mult  = multCollection.get(mid).toJSON();
                data.atual = this.options.atual;

                this.$el.html(_.template(multTpl, data));
            },

            resetDados: function () {
                this.$("#quantidade").val("");
            },

            preparaDados: function (dadosCadastro) {
                var m = this.$("#quantidade").val();

                var id = this.$("#quantidade").data("mult-id");
                var limite = multCollection.get(id).get("limite");

                // se o multiplicador for um valor não numérico ou vazio
                if(isNaN(m-0) || m === "")
                    dadosCadastro.err.push("O valor da quantidade deve ser numérico");
                else
                    //se existir um limite e o m for maior que o seu limite
                    if(limite && limite < m)
                        dadosCadastro.err.push("Valor do multiplicador esta maior que o seu limite");

                dadosCadastro.valorMult = m;

            }
        });

    return MultiplicadorView;
});