define([

    "util/evAggregator",
    "../../../components/require/text!templates/atividades/tabs.html",
    "collections/categoria"

    ], function(evAggregator, tabsCategoriaTpl, CategoriaCollection) {

        var CategoriaTabsView = Backbone.View.extend({

            el : "#categorias",

            collection : CategoriaCollection,

            render : function(categoria) {

                this.collection.fetch();

                this.$el.html(_.template(tabsCategoriaTpl, {
                    categorias  : this.collection,
                    selecionada : categoria
                }));

                return this;

            }
        });

        return CategoriaTabsView;

});