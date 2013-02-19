define([

    "collections/tipo",
    "views/atividades/cadastro/descricao",
    "views/atividades/cadastro/multiplicador",
    "views/atividades/cadastro/comprovantes",
    "text!templates/atividades/cadastro/tipos.html"

    ],  function(tCollection, DescricaoView, MultsView, ComprovantesView, tiposTpl) {

        var CategoriasView = Backbone.View.extend({

            collection: tCollection,

            tpl: tiposTpl,

            subViews : {
                descricao : null,
                multiplicador     : null,
                comprovantes    : null
            },

            events : {
                "change #tipo-selector" : "tipoSelected"
            },

            initialize : function() {
                this.subViews.descricao     = new DescricaoView();
                this.subViews.multiplicador = new MultsView(),
                this.subViews.comprovantes  = new ComprovantesView();

                this.on("close", this.limpaSubviews, this);
                this.on("tipoSelected", this.tipoSelected, this);
            },

            tipoSelected : function() {
                var tipoId = $("#tipo-selector").val();
                this.renderDescricao(tipoId);
                this.renderMultiplicadores(tipoId);
                this.renderComprovantes();
            },

            render : function(idCategoria) {

                this.$el.html(_.template(this.tpl, {
                    tipos : this.collection.toJSON(),
                    categoria: +idCategoria,
                    atual : this.options.atual
                }));

                this.trigger("tipoSelected");
                return this;
            },

            renderDescricao : function(tipoId) {
                this.subViews.descricao
                    .setElement($("#descricao-block"))
                    .render(tipoId);
            },

            renderMultiplicadores : function(tipoId) {
                this.subViews.multiplicador
                    .setElement($("#mults-block"))
                    .render(tipoId);
            },

            renderComprovantes : function () {
                this.subViews.comprovantes
                    .setElement($("#comprovantes-block"))
                    .render();
            },

            resetDados: function () {
                _.each(this.subViews, function (subView) {
                    if (subView.resetDados) subView.resetDados();
                });
            },

            preparaDados: function (dadosCadastro) {
                var t = this.$("#tipo-selector").val();
                // validar e (caso exista algum erro não modificar dadosCadastro)
                dadosCadastro.tipo = +t;

                _.each(this.subViews, function (subView) {
                    subView.preparaDados(dadosCadastro);
                });
            },

            limpaSubviews : function() {
                _.each( _(this.subViews).values(), function (subView) {
                   subView.close();
                });
            }
        });

        return CategoriasView;
});