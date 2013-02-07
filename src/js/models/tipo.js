define([

    "collections/multiplicador"

    ], function(MultiplicadorCollection) {

        var Tipo = Backbone.Model.extend({

            defaults : {
                //id
                codigo          : 0,
                categoria       : null,
                descricao       : "",
                pontuacao       : 0,
                limitePontos    : 999,
                pontuacaoRef    : 0,
                multiplicadores : null,
            },

            initialize : function() {
                this.set("multiplicadores", new MultiplicadorCollection());
                this.get("multiplicadores").localStorage = new Backbone.LocalStorage("tipos/" + this.id + "/multiplicadores");
                this.get("multiplicadores").fetch();
            },

            validate : function(attrs) {

                if(attrs.codigo === 0)
                    return "código não atribuído ao tipo ou código igual a 0";
                if(attrs.categoria === null)
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
            }

        });

        return Tipo;

});