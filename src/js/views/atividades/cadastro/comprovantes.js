define([

    "text!templates/atividades/cadastro/comprovantes.html",
    "collections/comprovante"

    ],  function (comprovantesTpl, comprovanteCollection) {

        var comprView = Backbone.View.extend({
            render: function () {
                this.$el.html(_.template(comprovantesTpl, {}));
                return this;
            }
        });

        return comprView;
});