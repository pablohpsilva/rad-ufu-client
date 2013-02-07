//
// Módulo para coordenar a renderização e remoção de views
//
define([

    "views/factory"

    ], function(ViewFactory) {

        var ViewManager = Backbone.Model.extend({

            factory : new ViewFactory(),

            // Destrói a view criada anteriormente, renderiza uma nova view e a
            // marca como view atual. As views são instânciadas passando 'options'
            // como parâmetro. Views estáticas (devem ser renderizdas apenas uma
            // vez) devem fornecer '{once : true}' junto com as outras 'options'
            show : function(view, options) {

                var args = (!options) ? {} : options;

                if (args.once) {
                    this.factory.create(view, _.omit(args, 'once')).render(); return;
                }

                if (this.currentView) this.currentView.close();
                this.currentView = this.factory.create(view, args).render();

            }
        });

        return ViewManager;

});