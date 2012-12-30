define([

    "collections/categoria",
    "util/evAggregator",

    ], function(CategoriaCollection, evAggregator) {

        var AppRouter = Backbone.Router.extend({

            routes : {

                "atividades/:categoria" : "atividades",
                "atividades"            : "primeiraCategoria",
                "inicio"                : "paginaInicial",
                "*actions"              : "defaultAction"
            },

            initialize : function() {

                // Navbar renderizada apena uma vez, para navbar dinâmica
                // é só disparar o evento especificando que tipo de navbar
                // deve ser renderizada
                evAggregator.trigger("view:navbar");

                this.on(
                    "route:atividades"
                    ,   function(categoria) {
                            evAggregator.trigger("view:atividades", categoria);
                });


                // Redireciona para a route de atividades da primeira categoria na
                // collection de categorias
                this.on(
                    "route:primeiraCategoria"
                    ,   function() {
                            var cat, categorias = CategoriaCollection;

                            categorias.fetch();
                            cat = encodeURIComponent(categorias.at(0).get("nome").toLowerCase());

                            this.navigate("#/atividades/" + cat, {trigger:true, replace:true});
                });

                this.on(
                    "route:paginaInicial"
                    ,   function(){
                            evAggregator.trigger("view:inicio");
                });

                this.on(
                    "route:defaultAction"
                    ,   function(actions){
                            if (!actions) this.navigate("#/inicio");
                                console.log('No route:', actions);
                });

                Backbone.history.start();
            }

        });

        return AppRouter;

});