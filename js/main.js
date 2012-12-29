require.config({

    paths : {
        "jquery"       :   "../components/jquery/jquery",
        "underscore"   : "../components/underscore/underscore",
        "backbone"     : "../components/backbone/backbone",

        // temporário
        "backbone.localStorage" : "../components/backbone/backbone.localStorage"
    },

    shim : {
        "app" : {
            deps : [
                "backbone",
                "backbone.localStorage",
                "underscore",
                "jquery"
            ]
        },

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

    "app"

    ], function(App) {

        App.init();

});