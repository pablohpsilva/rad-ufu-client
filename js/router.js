define([

    "collections/categoria",
    "util/evAggregator",

    ], function(CategoriaCollection, evAggregator) {

        var AppRouter = Backbone.Router.extend({

            aggr : evAggregator,

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
                this.aggr.trigger("view:navbar");

                this.on(
                    "route:atividades"
                    ,   function(categoria) {
                            this.aggr.trigger("view:atividades", categoria);
                });

                /*
                * Lista as atividades da primeira categoria na collection
                */
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
                            this.aggr.trigger("view:inicio");
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