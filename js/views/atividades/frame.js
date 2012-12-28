define([

    "views/categorias/tabs",
    "views/atividades/tabela",
    "util/dummyData",
    "../../../components/require/text!templates/atividades/frame.html"

    ], function(CategoriasTabsView, AtividadesTabelaView, ProfOak, atividadesFrameTpl) {

        var AtividadesFrame = Backbone.View.extend({

            el : $("#content"),

            subViews : {
                "tabs"   : null,
                "tabela" : null
            },

            initialize : function() {
                this.subViews.tabs   = new CategoriasTabsView(),
                this.subViews.tabela = new AtividadesTabelaView({collection:ProfOak.get("atividades")})
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
            }

        });

        return AtividadesFrame;

});