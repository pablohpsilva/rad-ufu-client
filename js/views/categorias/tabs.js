define([

    "jquery",
    "underscore",
    "backbone",
    "../../../components/require/text!templates/categorias/tabs.html",
    "collections/categoria"

    ], function($, _, Backbone, tabsCategoriaTpl, CategoriaCollection) {

        var CategoriaTabsView = Backbone.View.extend({

            collection : new CategoriaCollection(),

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