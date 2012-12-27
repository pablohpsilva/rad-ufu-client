define([

    "backbone.localStorage",
    "models/categoria"

    ], function(Backbone, Categoria) {

        var CategoriaCollection = Backbone.Collection.extend({

            model : Categoria,
            localStorage : new Backbone.LocalStorage("categorias")

        });

        //singleton
        return new CategoriaCollection();

});