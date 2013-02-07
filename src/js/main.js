require.config({

    // Development: previne contra o cache dos browsers
    urlArgs : new Date().getTime(),

    baseUrl: "src/js",

    paths : {
        "jquery"       : "../../components/jquery/jquery",
        "underscore"   : "../../components/underscore/underscore",
        "backbone"     : "../../components/backbone/backbone",
        "bootstrap"   : "../../components/bootstrap/js/bootstrap",
        "text": "../../components/require/text",

        // Development: armazenagem temporária dos dados
        "backbone.localStorage" : "../../components/backbone/backbone.localStorage"
    },

    shim : {
        "app" : {
            deps : [
                "backbone",
                "backbone.localStorage",
                "underscore",
                "jquery",
                "bootstrap"
            ]
        },

        "bootstrap" : {
            deps : ["jquery"]
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