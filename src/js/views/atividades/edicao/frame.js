define([

    "views/atividades/cadastro/frame",
    "views/atividades/edicao/categorias",
    "views/atividades/edicao/tipos",
    "collections/comprovante",
    "collections/tipo"

    ],  function (CadastroAtividadeFrame, CategoriasView, TiposView,
                  comprovanteCollection,
                  tipoCollection) {

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

                this.listenTo(this.model, "change", this.atividadeAlterada);

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

                // inicializa datepickers
                this.$(".datepicker").datepicker();

                return this;

            },

            editarAtividade: function () {
                console.log("editando atividade");
                var atividade = {}, novos = [];

                atividade = this.preparaDados();

                if (!_.isEmpty(atividade.err)) {
                    _.each(atividade.err, function (errMsg) {
                        this.subViews.err
                            .setElement(this.$("#err"))
                            .render({ msg: errMsg, type: "alert-error" });
                    }, this);
                } else {
                    // Se existem novos arquivos para a atividade
                    if (!_.isEmpty(atividade.selecionados))
                        _.each(atividade.selecionados, function (f) {
                            var c = comprovanteCollection.create({nome:f.name});
                            novos.push(c.get("id"));
                        });

                    atividade.comprovantes = (!_.isEmpty(novos)) ?
                        _.union(atividade.atuais, novos) :
                        atividade.atuais;

                    this.model.set(_.omit(atividade, "atuais", "err", "selecionados", "categoria"));
                }
                console.log(atividade);
            },

            atividadeAlterada: function () {
                console.log("Atributos alterados: ", this.model.changedAttributes());
                this.subViews.err
                        .setElement(this.$("#err"))
                        .render({ msg: "Dados da atividade alterados", type: "alert-success" });
            }
        });

        return EdicaoAtividadeFrame;
});