define([

    "models/professor"

    ], function(Professor) {

        var AtividadeCollection = Backbone.Collection.extend({
            model : Professor
        });

        return new ProfessorCollection();
});