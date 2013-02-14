define(function() {

    var Multiplicador = Backbone.Model.extend({

        defaults : {
            //id
            nome   : "",
            limite : 999
        },

        validate : function(attrs) {
            if(attrs.nome === "")
                return "nome não atribuído ao multiplicador";
        }
    });

    return Multiplicador;

});