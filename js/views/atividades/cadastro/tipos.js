define([

    "collections/tipo",
    "../../../../components/require/text!templates/atividades/cadastro/tipos.html"

    ],  function(tCollection, tiposTpl) {

        var CategoriasView = Backbone.View.extend({



            render : function(data) {

                var tiposDaCategoria =
                    _.chain(tCollection.toJSON())
                     .filter(function(t){
                        return t.categoria.get("nome").toLowerCase() === data.categoria
                            || t.categoria.get("id") == data.categoria;
                     })
                     .value();

                data.tipos = tiposDaCategoria;
                this.$el.html(_.template(tiposTpl, data));

                return this;
            }
        });

        return CategoriasView;
});