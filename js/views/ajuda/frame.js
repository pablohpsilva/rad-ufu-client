define([

    "../../../components/require/text!../../templates/ajuda/frame.html"

    ], function(ajudaFrameTpl) {

        var AjudaFrame = Backbone.View.extend({

            el : $("#content"),

            render : function() {
                this.$el.html(_.template(ajudaFrameTpl));

                return this;

            },

        });

        return AjudaFrame;

});