define([

    "models/comprovante"

    ], function(Comprovante) {

        var ComprovanteCollection = Backbone.Collection.extend({
            model : Comprovante
        });

        return ComprovanteCollection;
});