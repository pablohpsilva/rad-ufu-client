define([

    "collections/tipo",
    "text!templates/atividades/cadastro/multiplicadores.html"

],  function(tCollection, multTpl) {

    var MultiplicadorView = Backbone.View.extend({

        render : function(tipoCodigo) {
            var model = tCollection
                .where({ codigo : +tipoCodigo })
                .pop();

            var data = (model) ? model.get("multiplicadores").toJSON() : [];

            this.$el.html(_.template(multTpl, { multiplicadores : data }));
        }
    });

    return MultiplicadorView;
});