define([], function() {

        var Atividade = Backbone.Model.extend({

            defaults : {
                //id
                descricao    : "",
                inicio       : "",
                fim          : "",
                comprovantes : [],
                tipo         : 0,
                valorMult    : 0
            },

            validate : function(attrs) {
                if(attrs.inicio === "" || attrs.fim === "")
                    return "data de início ou fim não atribuídas a atividade";
                if(attrs.comprovantes.length === 0)
                    return "comprovante não anexado a atividade";
                if(attrs.tipo === 0)
                    return "atividade sem tipo";
            }
        });

        return Atividade;

});