define([

    "util/evAggregator",
    "views/atividades/tabs",
    "views/atividades/tabela",
    "../../../components/require/text!templates/atividades/frame.html"

    ], function(evAggregator, Tabs, Tabela, atividadesFrameTpl) {

        var AtividadesFrame = Backbone.View.extend({

            el : $("#content"),

            subViews : {

                tabs   : new Tabs(),
                tabela : new Tabela()
            },

            initialize : function() {
                this.on("close", this.limpaSubviews, this);
            },

            render : function(catSelecionada) {

                this.$el.html(_.template(atividadesFrameTpl));

                this.subViews.tabs
                    .setElement($("#categorias"))
                    .render(catSelecionada);

                this.subViews.tabela
                    .setElement($("#atividades"))
                    .render();

                return this;
            },

            limpaSubviews : function() {

                _.each( _(this.subViews).values(), function (subView) {
                   subView.close();
                });
            }

        });

        return AtividadesFrame;

});