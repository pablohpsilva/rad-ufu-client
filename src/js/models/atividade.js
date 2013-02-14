define([

    "collections/comprovante"

    ], function(ComprovanteCollection) {

        var Atividade = Backbone.Model.extend({

            defaults : {
                //id
                descricao    : "",
                inicio       : null,
                fim          : null,
                comprovantes : [],
                tipo         : null,
                valorMult    : 0
            },

            initialize : function() {
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