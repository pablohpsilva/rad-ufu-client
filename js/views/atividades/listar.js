define([

    "jquery",
    "underscore",
    "backbone",
    "views/categorias/tabs",
    "../../../components/require/text!templates/atividades/lista.html"

    ], function($, _, Backbone, CategoriasTabsView, listarAtividadesTpl) {

        var AtividadesListView = Backbone.View.extend({

            el : $("#content"),

            render : function(catSelecionada) {

                var catTabView = new CategoriasTabsView();

                this.$el.html(_.template(listarAtividadesTpl));

                catTabView.setElement($("#categorias"));
                catTabView.render();

                return this;

            }
        });

        return AtividadesListView;

});