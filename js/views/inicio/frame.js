define([

    "util/evAggregator",
    "../../../components/require/text!../../templates/inicio/frame.html"

    ], function(evAggregator, inicioTpl) {

        var InicioFrame = Backbone.View.extend({

            el : $("#content"),

            render : function() {

                this.$el.html(_.template(inicioTpl));

                return this;
            }
        });

        return InicioFrame;

});