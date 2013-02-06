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
                this.on("close", this.limpaSubviews, this);

                this.listenTo(this.subViews.tipos, "close", function() {
                    console.log(this);
                    this.$("#dates-block").hide(); // TODO: exibir um warning
                }, this);

                this.listenTo(this.subViews.tipos, "tipoSelected", function() {
                    this.$("#dates-block").show();
                }, this);

                this.listenTo(this.subViews.categorias, "change", this.renderTipos);
            },

            render : function() {

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
