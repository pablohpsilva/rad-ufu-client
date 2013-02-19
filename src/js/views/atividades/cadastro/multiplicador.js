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
                // validar e (caso exista algum erro não modificar dadosCadastro)
                dadosCadastro.valorMult = m;

            }
        });

    return MultiplicadorView;
});