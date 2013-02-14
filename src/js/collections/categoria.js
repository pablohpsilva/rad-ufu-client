define([

    "models/categoria"

    ], function(Categoria) {

        var CategoriaCollection = Backbone.Collection.extend({
            model : Categoria
        });

        //singleton
        return new CategoriaCollection();

});