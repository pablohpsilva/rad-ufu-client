define([

    "backbone",
    "models/multiplicador"

    ], function(Backbone, Multiplicador) {

        var MultiplicadorCollection = Backbone.Collection.extend({
            model : Multiplicador
        });

        return MultiplicadorCollection;

});