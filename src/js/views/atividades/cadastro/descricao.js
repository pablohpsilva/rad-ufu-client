define([

    "collections/tipo",
    "text!templates/atividades/cadastro/descricao.html"

    ],  function(tCollection, descricaoTpl) {

        var DescricaoView = Backbone.View.extend({

            render : function(tipoId) {
                //console.log("render descricao tipo:", tipoId);
                var model = tCollection
                        .where({id: +tipoId})
                        .pop();

                var descricao = (model)? model.get("descricao") : "";

                this.$el.html(_.template(descricaoTpl, {
                    descricao : descricao
                }));
            }
        });

        return DescricaoView;
});