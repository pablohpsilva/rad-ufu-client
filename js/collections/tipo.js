define([

    "models/tipo"

    ], function(Tipo) {

        var AtividadeCollection = Backbone.Collection.extend({
            model : Tipo
        });

        return new TipoCollection();
});