define([

    "module",
    "collections/comprovante",
    "collections/atividade"

    ], function (module, comprovanteCollection, atividadeCollection) {

        // Método adicionado Backbone.View para destruir as views, no final
        // dispara o evento 'close', as views podem escutar este evento para
        // executar rotinas de limpeza
        Backbone.View.prototype.close = function() {
            this.undelegateEvents();
            this.$el.empty();
            this.stopListening();
            this.trigger("close");
        };


        var App = Backbone.Model.extend({

            server: module.config().serverLocation,
            api:    module.config().apiLocation,
            user:   module.config().loggedUser,
            isDemo: module.config().demo,

            bootstrapCollections: function () {
                if (!this.isDemo) {
                    comprovanteCollection.url   = this.server + this.api + "comprovante";
                    atividadeCollection.url     = this.server + this.api +
                        "professor/" + this.user.id + "/atividade";
                }
            },

            initialize: function  () {
                this.bootstrapCollections();
            }
        });

        return App;
});