define([

    "module",
    "collections/comprovante",
    "collections/atividade",
    "collections/categoria"

    ], function (module, comprovanteCollection, atividadeCollection,
                 categoriaCollection) {

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

            user:       module.config().loggedUser,
            isDemo:     module.config().demo,
            atividades: module.config().atividades,
            categorias: module.config().categorias,

            bootstrapCollections: function () {
                var Atividade = atividadeCollection.model;

                console.log("App > Inicializando collections");

                categoriaCollection.url   = "api/categoria";
                comprovanteCollection.url = "api/comprovante";
                atividadeCollection.url   = "api/professor/" + this.user.id + "/atividade";

                console.log("App > user: ", this.user);

                _.each(this.atividades, function (atividadeServerJSON, i) {
                    this.atividades[i] = Atividade.prototype.parse(atividadeServerJSON);
                }, this);

                categoriaCollection.reset(this.categorias);
                atividadeCollection.reset(this.atividades);
            }

        });

        return App;
});