define(function() {

        var Multiplicador = Backbone.Model.extend({

            defaults : {
                //id
                nome   : "",
                valor  : 0,
                limite : 999
            },

            validate : function(attrs) {

                if(attrs.nome === "")
                    return "nome não atribuído ao multiplicador";
                if(attrs.valor === 0)
                    return "valor não atribuído ao multiplicador ou valor igaul a 0";
            }

        });

        return Multiplicador;

});