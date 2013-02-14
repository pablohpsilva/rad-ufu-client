define([

    "models/tipo"

    ], function(Tipo) {

        var TipoCollection = Backbone.Collection.extend({
            model : Tipo
        });

        return new TipoCollection();
});