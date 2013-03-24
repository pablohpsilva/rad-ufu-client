define([

    "util/evAggregator",
    "views/atividades/entradaTabela",
    "views/alerts/alert",
    "collections/atividade",
    "collections/categoria",
    "collections/tipo",
    "text!templates/atividades/tabela.html"

    ],  function(evAggregator, EntradaTabelaView, InfoAlertView, atividadeCollection,
                 categoriaCollection,
                 tipoCollection,
                 tabelaTpl) {

        var AtividadesTabelaView = Backbone.View.extend({

            collection : atividadeCollection,

            subViews : {
                atividades : [],
                alert: {
                     err: new InfoAlertView()
                }
            },

            initialize : function() {

                //this.listenTo(this.collection, "add", this.addOne, this);
                this.listenTo(this.collection, "remove", this.render, this);

                this.on("close", this.limpaSubviews, this);
            },

            render : function () {

                this.limpaSubviews();

                this.$el.empty();
                this.subViews.atividades = [];

                function catSelecionada   (c) {
                    return c.get("nome").toLowerCase() === this.options.categoria ||
                        c.get("id") === this.options.categoria;
                }
                function atividadeDoTipo  (a) { return _.contains(_.pluck(tipos,"id"), a.tipo); }
                function addItemNo        (a) {
                    var i = _.indexOf(_.pluck(tipos, "id"), a.tipo);
                    if (i !== -1) a.item = tipos[i].id;
                    return a;
                }

                //
                // Acha a categoria selecionada
                //
                var cat = (categoriaCollection).chain()
                    .filter(catSelecionada, this)
                    .first().value();

                console.log("tabelaView > categorias: ", categoriaCollection);
                console.log("tabelaView > categoria selecionada: ", this.options.categoria);
                console.log("tabelaView > categoria achada: ", cat);

                //
                // Acha os tipos pertencentes a categoria selecionada
                //
                var tipos = _.chain(tipoCollection.toJSON())
                    .where({categoria:cat.id})
                    .value();


                //
                // Acha as atividades pertencentes aos tipos das categorias
                //
                var ativs = _.chain(atividadeCollection.toJSON())
                    .filter(atividadeDoTipo)
                    .map(addItemNo)
                    .value();

                console.log("atividades:",ativs);

                _.each(ativs, function (atividade) {
                    this.subViews.atividades
                       .push(new EntradaTabelaView( {model : atividade} ));
                }, this);

                if (!(_.isEmpty(this.subViews.atividades))) {

                    this.$el.html(_.template(tabelaTpl));

                    _(this.subViews.atividades).each(function(view){
                        this.$el.children("tbody").append(view.render().$el);
                    }, this);

                } else {
                    //this.$el.append("Sem atividades");
                    this.subViews.alert.err
                        .setElement($("#err"))
                        .render("Nenhuma atividade cadastrada");
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