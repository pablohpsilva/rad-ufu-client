define([

    "util/evAggregator",
    "views/atividades/entradaTabela"

    ],  function(evAggregator, EntradaTabelaView) {

        var AtividadesTabelaView = Backbone.View.extend({

            el : "#atividades",

            subViews : {
                atividades : []
            },

            initialize : function() {

                this.listenTo(evAggregator, "view:atividades:tabela", this.render);

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
                        .push(new EntradaTabelaView( {model : atividade} ));
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

                a = new EntradaTabelaView( {model : atividade} );
                this.subViews.atividades.push(a);

                this.$el.append(a.render().$el);
            },

        });

        return AtividadesTabelaView;
});