define([

    "backbone",
    "model/comprovante"

    ], function(Backbone, Comprovante) {

        var MultiplicadorCollection = Backbone.Collection.extend({
            model : Comprovante
        });

        return MultiplicadorCollection;

});