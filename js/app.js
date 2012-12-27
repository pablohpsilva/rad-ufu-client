define([

    "router"

    ], function(Router) {

        var App = function() {

            return {

                loggedProf : null,

                init : function() {
                    new Router();
                }
            };
        };

        return new App();

});