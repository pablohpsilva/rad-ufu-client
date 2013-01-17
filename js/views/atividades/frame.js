define([

    "views/atividades/tabs",
    "views/atividades/tabela",
    "../../../components/require/text!templates/atividades/frame.html"

    ], function(TabsView, TabelaView, atividadesFrameTpl) {

        var AtividadesFrame = Backbone.View.extend({

            el : $("#content"),

            subViews : {

                tabs   : new TabsView(),
                tabela : new TabelaView()
            },

            initialize : function() {
                this.on("close", this.limpaSubviews, this);
            },

            render : function() {

                this.$el.html(_.template(atividadesFrameTpl, {categoria:this.model}));

                this.subViews.tabs
                    .setElement($("#categorias-block"))
                    .render(this.model);

                this.subViews.tabela
                    .setElement($("#tabela-block"))
                    .render(this.model);

                // inicializa o tooltip
                // $("[rel=\"tooltip\"]").tooltip();

                return this;
            },

            limpaSubviews : function() {
                // bug do bootstrap, o tooltip não é removido depois que se
                // clica no bt, tooltip podia ser removido se o elemento for
                // destruído
                // $("[rel=\"tooltip\"]").tooltip("destroy");

                _.each( _(this.subViews).values(), function (subView) {
                   subView.close();
                });
            }

        });

        return AtividadesFrame;

});