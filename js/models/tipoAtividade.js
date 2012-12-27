define([

    "backbone"

    ], function(Backbone) {

        var TipoAtividade = Backbone.Model.extend({

            defaults : {
                //id
                codigo          : 0,
                categoria       : null,
                descricao       : "",
                pontuacao       : 0,
                limitePontos    : 999,
                pontuacaoRef    : 0,
                multiplicadores : []
            },

            validate : function(attrs) {

                if(!attrs.codigo)
                    return "código não atribuído ao tipo ou código igual a 0";
                if(!attrs.categoria)
                    return "categoría não a atribuída ao tipo";
                if(!attrs.descricao)
                    return "descrição não atribuída ao tipo";
                if(!attrs.pontuacao)
                    return "pontuação não atribuída ao tipo ou pontuação igual a 0";

                /*
                 * pontuação ref obrigatória?
                 * if(attrs.pontuacaoRef === 0)
                 *   return "pontuação referencia não atríbuida ao tipo";
                 */
            }

        });

        return TipoAtividade;

});