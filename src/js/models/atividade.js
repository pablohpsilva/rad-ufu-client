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

            validate : function(attrs) {
                if(attrs.inicio === null || attrs.fim === null)
                    return "data de início ou fim não atribuídas a atividade";
                if(attrs.comprovantes === null)
                    return "comprovante não anexado a atividade";
                if(attrs.tipo === null)
                    return "atividade sem tipo";
            },

            toJSON: function () {
                var json        = _.clone(this.attributes);
                    json.inicio = this.formatDate(this.get("inicio"));
                    json.fim    = this.formatDate(this.get("fim"));

                return json;
            },

            formatDate: function (d) {
                var dia = d.getDate(),
                    mes = d.getMonth(),
                    ano = d.getFullYear();

                return dia + "/" + mes + "/" + ano;
            }

        });

        return Atividade;

});