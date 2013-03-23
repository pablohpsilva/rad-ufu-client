define([

        "collections/categoria",
        "collections/multiplicador"

    ], function (categoriaCollection, multCollection) {

        var Tipo = Backbone.Model.extend({

            defaults : {
                //id
                categoria       : 0,
                descricao       : "",
                pontuacao       : 0,
                limitePontos    : 0,
                pontuacaoRef    : 0,
                multiplicador   : 0
            },

            initialize : function() {
            },

            validate : function(attrs) {

                if(attrs.id === 0)
                    return "código não atribuído ao tipo ou código igual a 0";
                if(attrs.categoria === 0)
                    return "categoría não a atribuída ao tipo";
                if(attrs.descricao === "")
                    return "descrição não atribuída ao tipo";
                if(attrs.pontuacao === 0)
                    return "pontuação não atribuída ao tipo ou pontuação igual a 0";

                /*
                 * pontuação ref obrigatória?
                 * if(attrs.pontuacaoRef === 0)
                 *   return "pontuação referencia não atríbuida ao tipo";
                 */
            },

            parse: function (response, options) {
                var attrHash = _.extend({}, response);

                categoriaCollection.add(attrHash.categoria);
                attrHash.categoria = attrHash.categoria.id;
                multCollection.add(attrHash.multiplicador);
                attrHash.multiplicador = attrHash.multiplicador.id;

                return attrHash;
            }

        });

        return Tipo;

});