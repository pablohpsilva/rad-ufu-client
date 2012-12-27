define([

    "jquery",
    "underscore",
    "backbone",
    "../../components/require/text!../templates/inicio.html"

    ], function($, _, Backbone, inicioTpl) {

        var InicioView = Backbone.View.extend({

            el : $("#content"),

            render : function() {

                //this.$el.empty();
                this.$el.html(_.template(inicioTpl));

                return this;

            }
        });

        return InicioView;

});