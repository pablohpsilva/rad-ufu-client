define([

    "../../components/require/text!../templates/inicio.html"

    ], function(inicioTpl) {

        var InicioView = Backbone.View.extend({

            render : function() {

                this.$el.html(_.template(inicioTpl));

                return this;

            }
        });

        return InicioView;

});