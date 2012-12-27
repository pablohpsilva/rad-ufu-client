define([

    "backbone"

    ], function(Backbone) {

        var Comprovante = Backbone.Model.extend({

            defaults : {
                //id
                arquivo : ""
            },

            validate : function(attrs) {
                if(!attrs.arquivo)
                    return "arquivo não atribuído ao comprovante";
            }

        });

        return Comprovante;

});