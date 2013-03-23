define([

    "models/professor"

    ], function(Professor) {

        var ProfessorCollection = Backbone.Collection.extend({
            model : Professor
        });

        return new ProfessorCollection();
});