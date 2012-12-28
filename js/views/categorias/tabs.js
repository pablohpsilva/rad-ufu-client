define([

    "../../../components/require/text!templates/categorias/tabs.html",
    "collections/categoria"

    ], function(tabsCategoriaTpl, CategoriaCollection) {

        var CategoriaTabsView = Backbone.View.extend({

            collection : CategoriaCollection,

            render : function(categoria) {

                this.collection.fetch();

                this.$el.html(_.template(tabsCategoriaTpl, {
                    categorias  : this.collection,
                    selecionada : decodeURIComponent(categoria)
                }));

                return this;

            }
        });

        return CategoriaTabsView;

});