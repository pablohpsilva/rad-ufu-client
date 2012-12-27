define([

    "backbone"

    ], function(Backbone) {

        var Categoria = Backbone.Model.extend({

            defaults : {
                //id
                nome : ""
            },

            validate : function(attrs) {

                if(attrs.nome === null)
                    return "nome não atribuído a categoria";
            }

        });

        return Categoria;

});