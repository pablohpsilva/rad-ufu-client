define([

    "views/inicio",
    "views/atividades/frame",
    "../../components/require/text!../templates/app.html"

    ], function(InicioView, AtividadesFrame, appTpl) {

        var AppView = Backbone.View.extend({

            el : $("body"),

            subViews : {
                "inicio"     : null,
                "atividades" : null
            },

            initialize : function() {

                this.subViews.inicio     = new InicioView();
                this.subViews.atividades = new AtividadesFrame();

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