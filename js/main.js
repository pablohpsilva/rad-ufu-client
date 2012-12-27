require.config({

    paths : {
        "jquery"       :   "../components/jquery/jquery",
        "underscore"   : "../components/underscore/underscore",
        "backbone"     : "../components/backbone/backbone",
        "backbone.localStorage" : "../components/backbone/backbone.localStorage"
    },

    shim : {
        "backbone.localStorage" : {
            deps    : ["backbone"],
            exports : "Backbone"
        },

        "underscore" : {
            exports : "_"
        },

        "backbone" : {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps : ["underscore", "jquery"],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports : "Backbone"
        }
    }
});

require([

    "app",
    "collections/categoria"

    ], function(App, CategoriaCollection) {

        categorias = CategoriaCollection;
        categorias.create({id:1, nome:"Ensino"});
        categorias.create({id:2, nome:"Orientação"});
        categorias.create({id:3, nome:"Produção"});
        categorias.create({id:4, nome:"Pesquisa"});

        new App.init();

});