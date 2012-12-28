define([

    "models/multiplicador"

    ], function(Multiplicador) {

        var MultiplicadorCollection = Backbone.Collection.extend({
            model : Multiplicador
        });

        return MultiplicadorCollection;

});