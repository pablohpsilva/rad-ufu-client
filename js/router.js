define([

    "backbone",
    "collections/categoria",
    "views/app"

    ], function(Backbone, CategoriaCollection, AppView) {

        var AppRouter = Backbone.Router.extend({

            appView : new AppView(),

            routes : {

                "atividades/:categoria" : "atividades",
                "atividades"            : "primeiraCategoria",
                "inicio"                : "paginaInicial",
                "*actions"              : "defaultAction"
            },

            initialize : function() {

                this.on("route:atividades", function(categoria){
                    this.appView.trigger("view:atividades", categoria);
                });

                /*
                * Lista as atividades da primeira categoria na collection
                */
                this.on("route:primeiraCategoria", function(){
                    var cat, categorias = CategoriaCollection;

                    categorias.fetch();
                    cat = encodeURIComponent(categorias.at(0).get("nome").toLowerCase());

                    this.navigate("#/atividades/" + cat, {trigger:true, replace:true});
                });

                this.on("route:paginaInicial", function(){
                    this.appView.trigger("view:inicio");
                });

                this.on("route:defaultAction", function(actions){
                    if (!actions) this.navigate("#/inicio");

                    console.log('No route:', actions);
                });

                this.appView.render();
                Backbone.history.start();
            }

        });

        return AppRouter;

});