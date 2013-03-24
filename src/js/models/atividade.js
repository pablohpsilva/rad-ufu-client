define([

    "models/tipo",
    "collections/tipo",
    "collections/comprovante"

    ], function (Tipo, tipoCollection, comprovanteCollection) {

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
            },

            parse: function (response, options) {
                var attrHash = _.extend({}, response),
                    tipoAttrHash;

                tipoAttrHash = Tipo.prototype.parse(attrHash.tipo);
                tipoCollection.add(tipoAttrHash);

                attrHash.tipo = attrHash.tipo.id;

                _.each(attrHash.comprovantes, function (comprovante, i) {
                    comprovanteCollection.add(comprovante);
                    attrHash.comprovantes[i] = comprovante.id;
                });

                return attrHash;
            }

        });

        return Atividade;

});