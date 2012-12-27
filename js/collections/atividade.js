define([

    "backbone",
    "models/atividade"

    ], function(Backbone, Atividade) {

        var AtividadeCollection = Backbone.Collection.extend({
            model : Atividade
        });

        return AtividadeCollection;
});