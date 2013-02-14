define([

    "models/atividade"

    ], function(Atividade) {

        var AtividadeCollection = Backbone.Collection.extend({
            model : Atividade
        });

        return new AtividadeCollection();
});