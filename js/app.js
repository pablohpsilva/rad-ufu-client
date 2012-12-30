define([

    "router",
    "util/viewManager"

    ], function(Router, ViewManager) {

        return {

            init : function() {

                new ViewManager();
                new Router();
            }

        };

});