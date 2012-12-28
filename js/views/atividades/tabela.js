define([

    "jquery",
    "underscore",
    "backbone",
    "views/atividades/entradaTabela",

    ],  function($, _, Backbone, AtividadeView) {

        var AtividadesTabelaView = Backbone.View.extend({

            subViews : {
                atividades : []
            },

            initialize : function() {

                this.collection.on("add", this.addOne);
                this.collection.on("remove", this.render);

            },

            render : function() {

                this.$el.empty();
                this.subViews.atividades = [];

                this.collection.each(function(atividade){
                    this.subViews.atividades
                        .push(new AtividadeView( {model : atividade} ));
                }, this);

                if (!(_.isEmpty(this.subViews.atividades))) {

                    _(this.subViews.atividades).each(function(view){
                        this.$el.append(view.render().$el);
                    }, this);

                } else {
                    this.$el.append("Sem atividades");
                }

                return this;
            },

            addOne : function(atividade) {

                var a;

                if (_.isEmpty(this.subViews.atividades))
                    this.$el.empty();

                a = new AtividadeView( {model : atividade} );
                this.subViews.atividades.push(a);

                this.$el.append(a.render().$el);
            },

        });

        return AtividadesTabelaView;
});