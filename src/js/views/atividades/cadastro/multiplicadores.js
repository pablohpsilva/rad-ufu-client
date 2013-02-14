define([

    "collections/tipo",
    "collections/multiplicador",
    "text!templates/atividades/cadastro/multiplicador.html"

],  function(tCollection, multCollection, multTpl) {

    var MultiplicadorView = Backbone.View.extend({

        render : function(tipoId) {

            var mid = tCollection.get(tipoId)
                    .get("multiplicador");

            var mult = multCollection.get(mid);
            var data = mult ? mult.toJSON() : {};

            this.$el.html(_.template(multTpl, { mult : data }));
        }
    });

    return MultiplicadorView;
});