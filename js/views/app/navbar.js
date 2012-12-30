define([

    "util/evAggregator",
    "../../../components/require/text!../../templates/app/navbar.html"

    ], function(evAggregator, appTpl) {

        var NavbarView = Backbone.View.extend({

            el : $("#navbar"),

            render : function() {
                this.$el.html(_.template(appTpl));

                return this;

            },

        });

        return NavbarView;

});