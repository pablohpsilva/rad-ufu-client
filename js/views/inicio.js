define([

    "util/evAggregator",
    "../../components/require/text!../templates/inicio.html"

    ], function(evAggregator, inicioTpl) {

        var InicioView = Backbone.View.extend({

            el : $("#content"),

            aggr : evAggregator,

            initialize : function() {
                this.aggr.on("view:inicio", this.render, this);
            },

            render : function() {
                this.$el.html(_.template(inicioTpl));

                return this;

            }
        });

        return InicioView;

});