define(function() {

        var Multiplicador = Backbone.Model.extend({

            defaults : {
                //id
                nome   : ""
            },

            validate : function(attrs) {

                if(attrs.nome === "")
                    return "nome não atribuído ao multiplicador";
            }

        });

        return Multiplicador;

});