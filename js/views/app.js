define([

    "jquery",
    "underscore",
    "backbone",
    "views/inicio",
    "views/atividades/main",
    "../../components/require/text!../templates/app.html"

    ], function($, _, Backbone, InicioView, AtividadesMainView, appTpl) {

        var AppView = Backbone.View.extend({

            el : $("body"),

            subViews : {
                "inicio"     : new InicioView(),
                "atividades" : new AtividadesMainView()
            },

            initialize : function() {

                this.on("view:inicio", this.renderInicio);
                this.on("view:atividades", this.renderAtividades);
            },

            render : function() {

                this.$el.html(_.template(appTpl));
                return this;

            },

            renderInicio : function() {

                this.subViews.inicio
                    .setElement($("#content"))
                    .render();
            },

            renderAtividades : function(categoria) {

                this.subViews.atividades
                    .setElement($("#content"))
                    .render(categoria);
            }
        });

        return AppView;

});