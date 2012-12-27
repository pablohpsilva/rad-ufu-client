define([

    "jquery",
    "underscore",
    "backbone",
    "views/categorias/tabs",
    "../../../components/require/text!templates/atividades/main.html"

    ], function($, _, Backbone, CategoriasTabsView, AtividadesMainTpl) {

        var AtividadesMainView = Backbone.View.extend({

            el : $("#content"),

            subViews : {
                "categorias" : new CategoriasTabsView()
            },

            render : function(catSelecionada) {

                this.$el.html(_.template(AtividadesMainTpl));

                this.subViews.categorias
                    .setElement($("#categorias"))
                    .render(catSelecionada);

                return this;
            }

        });

        return AtividadesMainView;

});