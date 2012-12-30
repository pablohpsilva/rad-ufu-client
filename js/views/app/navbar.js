define([

    "util/evAggregator",
    "../../../components/require/text!../../templates/app/navbar.html"

    ], function(evAggregator, appTpl) {

        var NavbarView = Backbone.View.extend({

            //tagName : "div",

            el : $("#navbar"),

            aggr : evAggregator,

            initialize : function() {
                this.aggr.on("view:navbar", this.render, this);
            },

            render : function() {
                this.$el.html(_.template(appTpl));

                return this;

            },

        });

        return NavbarView;

});