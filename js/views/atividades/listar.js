define([

    "jquery",
    "underscore",
    "backbone",
    "../../../components/require/text!templates/atividades/listar.html",
    "collections/categoria"

    ], function($, _, Backbone, listarAtividadesTpl, CategoriaCollection) {

        var AtividadesListView = Backbone.View.extend({

            el : $("#content"),

            render : function(catSelecionada) {

                categorias = new CategoriaCollection();

                categorias.fetch();

                var data = {
                    categorias  : categorias,
                    selecionada : decodeURIComponent(catSelecionada)
                };

                var compiled = _.template(listarAtividadesTpl, data);

                //this.$el.empty();
                this.$el.html(compiled);

                return this;

            }
        });

        return AtividadesListView;

});