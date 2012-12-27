define([

    "backbone"

    ], function(Backbone) {

        var Atividade = Backbone.Model.extend({

            dafaults : {
                //id
                descricao   : "",
                inicio      : null,
                fim         : null,
                comprovante : null,
            },

            validate : function(attrs){
                if(attrs.inicio === null|| attrs.fim === null)
                    return "data de início ou fim não atribuídas a atividade";
                if(attrs.comprovante === null)
                    return "comprovante não anexado a atividade";
            }

        });

        return Atividade;

});