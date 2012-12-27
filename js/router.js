define([

    "backbone",
    "views/atividades/listar",
    "views/inicio",
    "collections/categoria"

    ], function(Backbone, AtividadesListView, InicioView, CategoriaCollection) {

        var AppRouter = Backbone.Router.extend({

            routes : {
                "atividades"            : "primeiraCategoria",
                "atividades/:categoria" : "listarAtividades",
                "inicio"                : "paginaInicial",
                "*actions"              : "defaultAction"
            }

        });

        var init = function() {

            var router = new AppRouter();

            /*
             * Lista as atividades da primeira categoria na collection
             */
            router.on("route:primeiraCategoria", function(){
                var categorias = new CategoriaCollection(),
                    cat;

                categorias.fetch();
                cat = encodeURIComponent(categorias.at(0).get("nome").toLowerCase());

                router.navigate("#/atividades/" + cat, {trigger:true, replace:true});
            });

            router.on("route:listarAtividades", function(categoria){
                var view = new AtividadesListView();
                view.render(categoria);
            });

            router.on("route:paginaInicial", function(){
                var view = new InicioView();
                view.render();
            })

            router.on("route:defaultAction", function(actions){
                console.log('No route:', actions);
            });

            Backbone.history.start();
        }

        return {
            init : init
        };

});