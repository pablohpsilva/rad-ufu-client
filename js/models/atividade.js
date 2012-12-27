define([

    "backbone.localStorage",
    "collections/comprovante"

    ], function(Backbone, ComprovanteCollection) {

        var Atividade = Backbone.Model.extend({

            dafaults : {
                //id
                descricao    : "",
                inicio       : null,
                fim          : null,
                comprovantes : null,
            },

            initialise : function() {
                this.comprovantes = new ComprovanteCollection();
                this.comprovantes.localStorage = new Backbone.LocalStorage("atividades/" + this.id + "/comprovantes");
                this.comprovantes.fetch();
            },

            validate : function(attrs) {
                if(attrs.inicio === null|| attrs.fim === null)
                    return "data de início ou fim não atribuídas a atividade";
                if(attrs.comprovante === null)
                    return "comprovante não anexado a atividade";
            }

        });

        return Atividade;

});