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
            }
        });

        return DescricaoView;
});