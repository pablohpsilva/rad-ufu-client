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

            validate : function (attrs) {
                if(attrs.inicio === "" || attrs.fim === "")
                    return "data de início ou fim não atribuídas a atividade";
                if(attrs.tipo === 0)
                    return "atividade sem tipo";
            },

            addComprovante: function (comprovante) {
                this.get("comprovantes").push(comprovante.get("id"));
            },

            rmComprovante: function (comprovante) {
                this.set("comprovantes", _.without(this.get("comprovantes"), comprovante.get("id")));
            },

            parse: function (response, options) {
                var attrHash = _.extend({}, response),
                    tipoAttrHash;

                if (attrHash.tipo) {
                    tipoAttrHash = Tipo.prototype.parse(attrHash.tipo);
                    tipoCollection.add(tipoAttrHash);
                    attrHash.tipo = attrHash.tipo.id;
                }

                if (attrHash.comprovantes) {
                    _.each(attrHash.comprovantes, function (comprovante, i) {
                        comprovanteCollection.add(comprovante);
                        attrHash.comprovantes[i] = comprovante.id;
                    });
                }

                return attrHash;
            }

        });

        return Atividade;

});