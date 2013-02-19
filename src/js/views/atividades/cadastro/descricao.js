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

                if(!d.length) // se a descricao tem tamanho igual a zero
                    dadosCadastro.err.push("Preencha o campo descricao");
                else if(d.length > 2300) // se a descricao tem tamanho maior que 2300
                    dadosCadastro.err.push("Descricao possui mais do que 2300 caracteres");

                dadosCadastro.descricao = d;
            }
        });

        return DescricaoView;
});