define([

    "collections/comprovante"

    ], function(ComprovanteCollection) {

        var Atividade = Backbone.Model.extend({

            dafaults : {
                //id
                descricao    : "",
                inicio       : null,
                fim          : null,
                comprovantes : null,
                tipo         : null
            },

            initialize : function() {
                this.set("comprovantes", new ComprovanteCollection());
                this.get("comprovantes").localStorage = new Backbone.LocalStorage("atividades/" + this.id + "/comprovantes");
                this.get("comprovantes").fetch();
            },

            validate : function(attrs) {
                if(attrs.inicio === null || attrs.fim === null)
                    return "data de início ou fim não atribuídas a atividade";
                if(attrs.comprovantes === null)
                    return "comprovante não anexado a atividade";
                if(attrs.tipo === null)
                    return "atividade sem tipo";
            }

        });

        return Atividade;

});