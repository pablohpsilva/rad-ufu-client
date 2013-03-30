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

                this.on("close", this.cleanUp, this);

                this.listenTo(this.subViews.tipos, "close", this.catSemTipo, this);

                this.listenTo(this.subViews.tipos, "tipoSelected", this.catComTipo, this);

                this.listenTo(this.subViews.categorias, "change", this.renderTipos);

                this.listenTo(this.model, "sync", this.atividadeAlterada);

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
                var atividade, addToAtividade, rmFromAtividade;

                addToAtividade  = _.bind(this.model.addComprovante, this.model);
                rmFromAtividade = _.bind(this.model.rmComprovante, this.model);

                atividade = this.preparaDados();

                if (!_.isEmpty(atividade.err)) {
                    _.each(atividade.err, function (errMsg) {
                        this.alert(errMsg, { type: "err" });
                    }, this);
                } else {

                    // se existem arquivos comprovantes para excluir da atividade
                    if (!_.isEmpty(atividade.toDestroy)) {
                        _.each(atividade.toDestroy, function (c) {
                            c.destroy({ success: rmFromAtividade });
                        });
                    }

                    // Se existem novos arquivos para a atividade temos que
                    // grava-los
                    if (!_.isEmpty(atividade.selecionados)) {
                        _.each(atividade.selecionados, function (f) {
                            comprovanteCollection.create({
                                nome:f.name,
                                arquivo:f,
                                atividade: this.model.get("id")
                            }, { success: addToAtividade });
                        }, this);
                    }
                    atividade = _.omit(atividade, "toDestroy" ,"atuais", "err", "selecionados", "categoria");
                    this.model.save(atividade);
                }
                console.log(atividade);
            },

            atividadeAlterada: function () {
                this.alert("Dados da atividade alterados", { type: "success" });
            }
        });

        return EdicaoAtividadeFrame;
});