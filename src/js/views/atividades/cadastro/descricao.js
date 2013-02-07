define([

    "collections/tipo",
    "text!templates/atividades/cadastro/descricao.html"

    ],  function(tCollection, descricaoTpl) {

        var DescricaoView = Backbone.View.extend({

            render : function(tipoCodigo) {
                //console.log("render descricao tipo:", tipoCodigo);
                var model = tCollection
                        .where({codigo: +tipoCodigo})
                        .pop();

                var descricao = (model)? model.get("descricao") : "";

                this.$el.html(_.template(descricaoTpl, {
                    descricao : descricao
                }));
            }
        });

        return DescricaoView;
});