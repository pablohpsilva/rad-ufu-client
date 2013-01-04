//
// Módulo para coordenar a renderização e remoção de views
//
define([

    "views/factory"

    ], function(ViewFactory) {

        var ViewManager = Backbone.Model.extend({

            factory : new ViewFactory(),

            initialize : function() {

                // Método adicionado Backbone.View para destruir as views, no final
                // dispara o evento 'close', as views podem escutar este evento para
                // executar rotinas de limpeza
                Backbone.View.prototype.close = function() {
                    this.$el.empty();
                    this.stopListening();
                    this.trigger("close");
                };
            },

            // Destrói a view criada anteriormente, renderiza uma nova view e a
            // marca como view atual. As views são instânciadas passando 'options'
            // como parâmetro. View estáticas (devem ser renderizdas apenas uma
            // vez) devem fornecer '{static : true}' junto com as outras 'options'
            show : function(view, options) {

                var args = (!options) ? {} : options;

                if (args.static) {
                    this.factory.create(view, _.omit(args, 'static')).render(); return;
                }

                if (this.currentView) this.currentView.close();
                this.currentView = this.factory.create(view, args).render();

            }
        });

        return ViewManager;

});