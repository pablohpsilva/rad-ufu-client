require.config({

    urlArgs: new Date().getTime(),

    paths: {
        "jquery": "../components/jquery/jquery",
        "underscore": "../node_modules/underscore/underscore",
        "backbone": "../node_modules/backbone/backbone",
        "text": "../node_modules/text/text",
        "chai": "../node_modules/chai/chai",
        "sinon": "../node_modules/sinon/pkg/sinon",
        "sinon-chai": "../node_modules/sinon-chai/lib/sinon-chai",
        "mocha": "../node_modules/mocha/mocha"
    },

    shim: {
        "tests": {
            deps: [
                "backbone",
                "mocha",
                "sinon"
            ]
        },
        "mocha": {
            init: function () {
                this.mocha.setup("bdd");
                return this.mocha;
            }
        },
        "backbone": {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps : ["underscore", "jquery"],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports : "Backbone"
        },
        "underscore": {
            exports : "_"
        }
    }
});

require(["tests"], function () {
    //mocha.run();
});