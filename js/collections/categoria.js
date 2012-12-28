define([

    "models/categoria"

    ], function(Categoria) {

        var CategoriaCollection = Backbone.Collection.extend({

            model : Categoria,
            localStorage : new Backbone.LocalStorage("categorias")

        });

        //singleton
        return new CategoriaCollection();

});