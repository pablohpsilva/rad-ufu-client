define([

    "collections/tipo",
    "text!templates/atividades/cadastro/descricao.html"

    ],  function(tCollection, descricaoTpl) {

        var DescricaoView = Backbone.View.extend({

            collection: tCollection,

            tpl: descricaoTpl,

            render : function(tipoId) {
                var data = {};

                data.descricao = this.collection.get(+tipoId)
                    .get("descricao");
                data.atual = this.options.atual;

                this.$el.html(_.template(this.tpl, data));
            },

            resetDados: function () {
                this.$("#descricao").val("");
            },

            preparaDados: function (dadosCadastro) {
                var d = this.$("#descricao").val();
                // validar e (caso exista algum erro não modificar dadosCadastro)
                dadosCadastro.descricao = d;
            }
        });

        return DescricaoView;
});