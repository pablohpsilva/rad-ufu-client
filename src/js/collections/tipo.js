define([

    "models/tipo"

    ], function(Tipo) {

        var TipoCollection = Backbone.Collection.extend({
            model : Tipo,
            localStorage : new Backbone.LocalStorage("tipos")
        });

        return new TipoCollection();
});