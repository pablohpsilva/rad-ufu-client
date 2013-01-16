define([

    "collections/tipo",
    "../../../../components/require/text!templates/atividades/cadastro/tipos.html"

    ],  function(tCollection, tiposTpl) {

        var CategoriasView = Backbone.View.extend({

            render : function(data) {

                data.tipos = tCollection.toJSON();
                this.$el.html(_.template(tiposTpl, data));

                return this;
            }
        });

        return CategoriasView;
});