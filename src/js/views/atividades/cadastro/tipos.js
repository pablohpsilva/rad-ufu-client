define([

    "collections/tipo",
    "collections/categoria",
    "views/atividades/cadastro/descricao",
    "views/atividades/cadastro/multiplicadores",
    "text!templates/atividades/cadastro/tipos.html"

    ],  function(tCollection, categoriaCollection, DescricaoView, MultsView, tiposTpl) {

        var CategoriasView = Backbone.View.extend({

            subViews : {
                descricao : new DescricaoView(),
                mults     : new MultsView()
            },

            events : {
                "change #tipo-selector" : "tipoSelected"
            },

            initialize : function() {
                this.on("close", this.limpaSubviews, this);
                this.on("tipoSelected", this.tipoSelected, this);
            },

            tipoSelected : function() {
                var tipoId = $("#tipo-selector").val().toLowerCase();
                this.renderDescricao(tipoId);
                this.renderMultiplicadores(tipoId);
            },

            render : function(selecionada) {
                function catSelecionada (c) {
                    return c.nome.toLowerCase() === selecionada
                        || c.id === +selecionada;
                }

                //
                // Acha a categoria selecionada
                //
                var cat = _.chain(categoriaCollection.toJSON())
                    .filter(catSelecionada)
                    .first().value();

                var tiposDaCategoria = _.chain(tCollection.toJSON())
                    .where({ categoria:cat.id })
                    .value();

                if (_.isEmpty(tiposDaCategoria)) {
                    this.close();
                } else {
                    this.$el.html(_.template(tiposTpl, {
                        tipos : tiposDaCategoria
                    }));

                    this.trigger("tipoSelected");
                }

                return this;
            },

            renderDescricao : function(tipoId) {
                this.subViews.descricao
                    .setElement($("#descricao-block"))
                    .render(tipoId);
            },

            renderMultiplicadores : function(tipoId) {
                this.subViews.mults
                    .setElement($("#mults-block"))
                    .render(tipoId);
            },

            limpaSubviews : function() {
                _.each( _(this.subViews).values(), function (subView) {
                   subView.close();
                });
            }
        });

        return CategoriasView;
});