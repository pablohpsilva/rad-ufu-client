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

                if(isNaN(m-0) || m=="") // se o multiplicador for um valor diferente de um numero ou nao tem nada escrito
                    dadosCadastro.err = "Erro no valor do multiplicador";
                else 
                    if(!limite) // se o limite nao for undefined
                        if(m > limite) //se o m for maior que o seu limite
                            dadosCadastro.err = "Valor do multiplicador esta maior que o seu limite";

                dadosCadastro.valorMult = m;

            }
        });

    return MultiplicadorView;
});