define([

    "util/evAggregator",
    "views/atividades/entradaTabela"

    ],  function(evAggregator, AtividadeView) {

        var AtividadesTabelaView = Backbone.View.extend({

            el : "#atividades",

            aggr : evAggregator,

            subViews : {
                atividades : []
            },

            initialize : function() {

                this.aggr.on("view:atividades:tabela", this.render, this);

                this.collection.on("add", this.addOne);
                this.collection.on("remove", this.render);


            },

            render : function() {
                // view dependente de 'views/atividades/frame'
                this.$el = $("#atividades");

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