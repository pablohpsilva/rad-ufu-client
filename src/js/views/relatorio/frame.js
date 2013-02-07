define([

    "text!../../templates/relatorio/frame.html"

    ], function(relatorioFrameTpl) {

        var RelatorioFrame = Backbone.View.extend({

            el : $("#content"),

            render : function() {
                this.$el.html(_.template(relatorioFrameTpl));

                return this;

            },

        });

        return RelatorioFrame;

});