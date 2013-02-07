define([

    "views/atividades/cadastro/categorias",
    "views/atividades/cadastro/tipos",
    "views/alert",
    "text!templates/atividades/cadastro/frame.html",

    ], function(CategoriasView, TiposView, AlertView, cadastroAtivFrameTpl) {

        var CadastroAtividadeFrame = Backbone.View.extend({

            el : $("#content"),

            subViews : {
                categorias : new CategoriasView(),
                tipos      : new TiposView(),
                err        : new AlertView()
            },

            initialize : function () {
                this.on("close", this.limpaSubviews, this);

                this.listenTo(this.subViews.tipos, "close", this.catSemTipo, this);

                this.listenTo(this.subViews.tipos, "tipoSelected", this.catComTipo, this);

                this.listenTo(this.subViews.categorias, "change", this.renderTipos);
            },

            catSemTipo : function () {
                this.$("#dates-controls-block").hide();
                this.subViews.err
                    .setElement($("#err"))
                    .render({
                    msg  : "Não existem atividades desta categoria"
                });
            },

            catComTipo : function () {
                this.subViews.err.close();
                this.$("#dates-controls-block").show();
            },

            render : function () {

                var data = {
                    categoria  : this.model,
                };

                this.$el.html(_.template(cadastroAtivFrameTpl, data));

                this.subViews.categorias
                    .setElement($("#categorias-block"))
                    .render({
                        categoria  : this.model
                    });

                this.renderTipos(this.model);

                return this;

            },

            renderTipos : function(categoria) {

                $("#tipos").empty();

                this.subViews.tipos
                    .setElement($("#tipos-block"))
                    .render(categoria);
            },

            limpaSubviews : function() {
                _.each( _(this.subViews).values(), function (subView) {
                   subView.close();
                });
            }
        });

        return CadastroAtividadeFrame;

});
