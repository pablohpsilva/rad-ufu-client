define([

    "module",
    "collections/comprovante",
    "collections/atividade",
    "collections/categoria",
    "collections/tipo"

    ], function (module, comprovanteCollection, atividadeCollection,
                 categoriaCollection,
                 tipoCollection) {

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
            tipos:      module.config().tipos,

            bootstrapCollections: function () {
                var Atividade = atividadeCollection.model;
                var Tipo      = tipoCollection.model;

                console.log("App > Inicializando collections");

                categoriaCollection.url   = "api/categoria";
                comprovanteCollection.url = "api/comprovante";
                atividadeCollection.url   = "api/professor/" + this.user.id + "/atividade";
                tipoCollection.url        = "api/tipo";

                console.log("App > user: ", this.user);

                _.each(this.atividades, function (atividadeServerJSON, i) {
                    this.atividades[i] = Atividade.prototype.parse(atividadeServerJSON);
                }, this);

                _.each(this.tipos, function (tipoServerJSON, i) {
                    this.tipos[i] = Tipo.prototype.parse(tipoServerJSON);
                }, this);

                tipoCollection.reset(this.tipos);
                categoriaCollection.reset(this.categorias);
                atividadeCollection.reset(this.atividades);
            }

        });

        return App;
});