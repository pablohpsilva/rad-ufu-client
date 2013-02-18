define([

    "collections/tipo",
    "collections/multiplicador",
    "text!templates/atividades/cadastro/multiplicador.html"

],  function(tCollection, multCollection, multTpl) {

    var MultiplicadorView = Backbone.View.extend({

        render : function(tipoId) {
            var data = {};
            var mid = tCollection.get(tipoId)
                    .get("multiplicador");

            data.mult  = multCollection.get(mid).toJSON();
            data.atual = this.options.atual;

            this.$el.html(_.template(multTpl, data));
        }
    });

    return MultiplicadorView;
});