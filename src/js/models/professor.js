define([], function() {

        var Professor = Backbone.Model.extend({

            defaults : {
                //id
                nome         : "",
                siape        : "",
                atividades   : []
            },

            initialize : function() {
            },

            validate : function(attrs) {

                if(attrs.nome === "")  return "nome não atribuído ao professor";
                if(attrs.siape === "") return "siape não atribuído ao professor";

            }

        });

        return Professor;
});