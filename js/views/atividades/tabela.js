define([

    "util/evAggregator",
    "views/atividades/entradaTabela",
    "util/dummyData",
    "../../../components/require/text!templates/atividades/tabela.html"

    ],  function(evAggregator, EntradaTabelaView, profOak, tabelaTpl) {

        var AtividadesTabelaView = Backbone.View.extend({

            el : "#tabela",

            collection : profOak.get("atividades"),

            subViews : {
                atividades : []
            },

            initialize : function() {

                this.listenTo(this.collection, "add", this.addOne, this);
                this.listenTo(this.collection, "remove", this.render, this);

                this.on("close", this.limpaSubviews, this);

            },

            render : function(selecionada) {

                this.$el.empty();
                this.subViews.atividades = [];

                _(this.collection
                    .filter(function(a){
                        return a.get("tipo").get("categoria").get("nome").toLowerCase() === selecionada;
                    }))
                    .each(function(atividade){
                        this.subViews.atividades
                            .push(new EntradaTabelaView( {model : atividade} ));
                    }, this);

                if (!(_.isEmpty(this.subViews.atividades))) {

                    this.$el.html(_.template(tabelaTpl));

                    _(this.subViews.atividades).each(function(view){
                        this.$el.children("tbody").append(view.render().$el);
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

            limpaSubviews : function() {

                _(this.subViews.atividades).each(function(subview) {
                    subview.close();
                });
            }

        });

        return AtividadesTabelaView;
});