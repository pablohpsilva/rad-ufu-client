define([

    "models/atividade",
    "models/comprovante",
    "collections/comprovante",
    "views/atividades/cadastro/categorias",
    "views/atividades/cadastro/tipos",
    "views/alert",
    "text!templates/atividades/cadastro/frame.html"

    ], function(Atividade, Comprovante, comprovanteCollection, CategoriasView,
                TiposView,
                AlertView,
                cadastroAtivFrameTpl) {

        var CadastroAtividadeFrame = Backbone.View.extend({

            el : $("#content"),

            tpl: cadastroAtivFrameTpl,

            subViews : {
                categorias : null,
                tipos      : null,
                err        : new AlertView()
            },

            events: {
                "click #cadastrar": "criarAtividade"
            },

            initialize : function () {

                this.subViews.categorias = new CategoriasView();
                this.subViews.tipos      = new TiposView();

                this.on("close", this.limpaSubviews, this);

                this.listenTo(this.subViews.tipos, "close", this.catSemTipo, this);

                this.listenTo(this.subViews.tipos, "tipoSelected", this.catComTipo, this);

                this.listenTo(this.subViews.categorias, "change", this.renderTipos);

            },

            catSemTipo : function () {
                this.$("#dates-controls-block").hide();
            },

            catComTipo : function () {
                this.$("#dates-controls-block").show();
            },

            render : function () {

                this.$el.html(_.template(this.tpl, {
                    editar: false,
                    atual: this.options.atual
                }));

                this.subViews.categorias
                    .setElement($("#categorias-block"))
                    .render();

                this.subViews.categorias
                    .categoriaSelected();

                // inicializa os tooltips
                this.$("[rel=\"tooltip\"]").tooltip();

                // inicializa datepickers
                this.$(".datepicker").datepicker();

                return this;

            },

            renderTipos : function (idCategoria) {

                $("#tipos").empty();

                this.subViews.tipos
                    .setElement($("#tipos-block"))
                    .render(idCategoria);
            },

            preparaDados: function () {
                var dadosCadastro = {};

                _.each(_.omit(this.subViews, "err"), function (subView) {
                    subView.preparaDados(dadosCadastro);
                });

                dadosCadastro.inicio = this.$("#dataInicio").val();
                dadosCadastro.fim    = this.$("#dataFim").val();

                return dadosCadastro;
            },

            criarAtividade: function () {
                console.log("cadastrando atividade");
                console.log(this.preparaDados());
                alert("todo");
            },

            limpaSubviews : function() {
                _.each(this.subViews, function (subView) {
                   subView.close();
                });
            }
        });

        return CadastroAtividadeFrame;

});
