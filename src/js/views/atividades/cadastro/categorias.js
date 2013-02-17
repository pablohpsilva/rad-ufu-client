define([

    "collections/categoria",
    "text!templates/atividades/cadastro/categorias.html"

    ],  function(catCollection, categoriasTpl) {

        var CategoriasView = Backbone.View.extend({

            events : {
                "change #categoria-selector" : "categoriaSelected"
            },

            categoriaSelected : function () {
                this.trigger("change", $("#categoria-selector").val().toLowerCase());
            },

            render : function () {
                data = {};
                data.categorias = catCollection.toJSON();

                this.$el.html(_.template(categoriasTpl, data));

                return this;
            }
        });

        return CategoriasView;
});