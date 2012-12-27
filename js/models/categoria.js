define([

    "backbone"

    ], function(Backbone) {

        var Categoria = Backbone.Model.extend({

            defaults : {
                nome : ""
            },

            validate : function(attrs) {
                if(attrs.nome === "")
                    return "O nome da categoria não pode ser vazio!";
            }

        });

        return Categoria;

});