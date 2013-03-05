require.config({

    // Development: previne contra o cache dos browsers
    urlArgs : new Date().getTime(),

    baseUrl: "src/js",

    paths : {
        "jquery":       "../../components/jquery/jquery",
        "underscore":   "../../node_modules/underscore/underscore",
        "localStorage": "../../node_modules/Backbone.localStorage/backbone.localStorage",
        "backbone":     "../../node_modules/backbone/backbone",
        "text":         "../../node_modules/text/text",
        "bootstrap":    "../../node_modules/bootstrap/bootstrap",
        "dummyData":    "util/dummyData"
    },

    shim : {
        "app" : {
            deps : [
                "dummyData",
                "bootstrap"
            ]
        },
        "bootstrap" : {
            deps : ["jquery"]
        },
        "backbone" : {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps : ["underscore", "jquery"],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports : "Backbone"
        },
        "localStorage": {
            deps: ["backbone"],
            exports: "Backbone"
        },
        "dummyData": {
            deps: ["localStorage"]
        },
        "underscore" : {
            exports : "_"
        }
    }
});

require(["app"], function(App) {
    App.init();
});