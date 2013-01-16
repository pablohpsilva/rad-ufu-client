define([

    "views/atividades/cadastro/categorias",
    "views/atividades/cadastro/tipos",
    "../../../../components/require/text!templates/atividades/cadastro/frame.html",

    ], function(CategoriasView, TiposView, cadastroAtivFrameTpl) {

        var CadastroAtividadeFrame = Backbone.View.extend({

            el : $("#content"),

            subViews : {
                categorias : new CategoriasView(),
                tipos      : new TiposView()
            },

            initialize : function() {
                this.listenTo(this.subViews.categorias, "change", this.renderTipos);
            },

            render : function() {

                var data = {
                    categoria  : this.model,
                };

                this.$el.html(_.template(cadastroAtivFrameTpl, data));

                this.subViews.categorias
                    .setElement($("#categorias"))
                    .render({
                        categoria  : this.model
                    });

                this.renderTipos(this.model);

                return this;

            },

            renderTipos : function(categoria) {

                $("#tipos").empty();

                this.subViews.tipos
                    .setElement($("#tipos"))
                    .render({
                        categoria : categoria
                    });
            },

            limpaSubviews : function() {
                _.each( _(this.subViews).values(), function (subView) {
                   subView.close();
                });
            }
        });

        return CadastroAtividadeFrame;

});
