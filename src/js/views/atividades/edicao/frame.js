define([

    "views/atividades/cadastro/frame",
    "views/atividades/edicao/categorias",
    "views/atividades/edicao/tipos",
    "collections/tipo"

    ],  function (CadastroAtividadeFrame, CategoriasView, TiposView, tipoCollection) {

        var EdicaoAtividadeFrame = CadastroAtividadeFrame.extend({

            events: {
                "click #salvar": "editarAtividade"
            },

            initialize : function () {

                var idCategoria = tipoCollection.get(this.model.get("tipo"))
                    .get("categoria");

                this.subViews.categorias = new CategoriasView({atual:idCategoria});
                this.subViews.tipos      = new TiposView({
                    atual:this.model.get("tipo"),
                    model:this.model
                });

                this.on("close", this.limpaSubviews, this);

                this.listenTo(this.subViews.tipos, "close", this.catSemTipo, this);

                this.listenTo(this.subViews.tipos, "tipoSelected", this.catComTipo, this);

                this.listenTo(this.subViews.categorias, "change", this.renderTipos);

                //console.log(this.model);
            },

            render : function () {
                var atual = this.model.toJSON();

                this.$el.html(_.template(this.tpl, {
                    editar: true,
                    atual: atual
                }));


                this.subViews.categorias
                    .setElement($("#categorias-block"))
                    .render();

                this.subViews.categorias
                    .categoriaSelected();

                // inicializa os tooltips
                this.$("[rel=\"tooltip\"]").tooltip();

                return this;

            },

            editarAtividade: function () {
                console.log("editando atividade");
                var atividade = {};

                atividade = this.preparaDados();
                console.log(atividade);
            }
        });

        return EdicaoAtividadeFrame;
});