define([

    "backbone.localStorage",
    "collections/atividade"

    ], function(Backbone, AtividadeCollection) {

        var Professor = Backbone.Model.extend({

            defaults : {
                //id
                nome       : "",
                login      : "",
                senha      : "",
                siape      : "",
                atividades : null
            },

            initialize : function() {
                this.atividades = new AtividadeCollection();
                this.atividades.localStorage = new Backbone.LocalStorage("professores/" + this.id + "/atividades");
                this.atividades.fetch();
            },

            validate : function(attrs) {

                if(attrs.nome === "")  return "nome não atribuído ao professor";
                if(attrs.login === "") return "login não atribuído ao professor";
                if(attrs.senha === "") return "senha não atribuída ao professor";
                if(attrs.siape === "") return "siape não atribuído ao professor";

            }

        });

        return Professor;

});