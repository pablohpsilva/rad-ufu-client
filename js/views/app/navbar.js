define([

    "util/evAggregator",
    "../../../components/require/text!../../templates/app/navbar.html"

    ], function(evAggregator, appTpl) {

        var NavbarView = Backbone.View.extend({

            el : $("#navbar"),

            initialize : function() {
                this.listenTo(evAggregator, "view:navbar", this.render);
            },

            render : function() {
                this.$el.html(_.template(appTpl));

                return this;

            },

        });

        return NavbarView;

});