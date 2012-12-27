define([

    "backbone",
    "models/comprovante"

    ], function(Backbone, Comprovante) {

        var ComprovanteCollection = Backbone.Collection.extend({
            model : Comprovante
        });

        return ComprovanteCollection;
});