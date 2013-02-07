define([

    "collections/tipo",
    "views/atividades/cadastro/descricao",
    "views/atividades/cadastro/multiplicadores",
    "text!templates/atividades/cadastro/tipos.html"

    ],  function(tCollection, DescricaoView, MultsView, tiposTpl) {

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
                var tipoCodigo = $("#tipo-selector").val().toLowerCase();
                this.renderDescricao(tipoCodigo);
                this.renderMultiplicadores(tipoCodigo);
            },

            render : function(catSelecionada) {

                var tiposDaCategoria =
                    _.chain(tCollection.toJSON())
                     .filter(function(t){
                        return t.categoria.get("nome").toLowerCase() === catSelecionada
                            || t.categoria.get("id") == catSelecionada;
                     })
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

            renderDescricao : function(tipoCodigo) {
                this.subViews.descricao
                    .setElement($("#descricao-block"))
                    .render(tipoCodigo);
            },

            renderMultiplicadores : function(tipoCodigo) {
                this.subViews.mults
                    .setElement($("#mults-block"))
                    .render(tipoCodigo);
            },

            limpaSubviews : function() {
                _.each( _(this.subViews).values(), function (subView) {
                   subView.close();
                });
            }
        });

        return CategoriasView;
});