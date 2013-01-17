define([

    "router",

    ], function(Router) {

        return {

            init : function() {

                new Router();

                // Método adicionado Backbone.View para destruir as views, no final
                // dispara o evento 'close', as views podem escutar este evento para
                // executar rotinas de limpeza
                Backbone.View.prototype.close = function() {
                    this.$el.empty();
                    this.stopListening();
                    this.trigger("close");
                };
            }

        };

});