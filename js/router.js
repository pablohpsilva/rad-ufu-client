define([

    "collections/categoria",
    "views/manager"

    ], function(CategoriaCollection, ViewManager) {

        var AppRouter = Backbone.Router.extend({

            viewManager : new ViewManager(),

            routes : {

                "atividades/:categoria"           : "atividades",
                "atividades/:categoria/cadastrar" : "cadastrarAtividade",
                "atividades"                      : "primeiraCategoria",
                "relatorio"                       : "relatorio",
                "ajuda"                           : "ajuda",
                "inicio"                          : "paginaInicial",
                "*actions"                        : "defaultAction"
            },

            initialize : function() {

                this.viewManager.show("navbar", {once:true});

                this.on(
                    "route:atividades"
                    ,   function(categoria) {
                            categoria = decodeURIComponent(categoria);
                            this.viewManager.show("atividades", {model:categoria});
                });

                this.on(
                    "route:cadastrarAtividade"
                    ,   function(categoria) {
                            categoria = decodeURIComponent(categoria);
                            this.viewManager.show("atividades:cadastro", {model:categoria});
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
                    "route:relatorio"
                    ,   function(){
                        this.viewManager.show("relatorio");
                });

                this.on(
                    "route:ajuda"
                    ,   function(){
                        this.viewManager.show("ajuda");
                });

                this.on(
                    "route:paginaInicial"
                    ,   function(){
                            this.viewManager.show("inicio");
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