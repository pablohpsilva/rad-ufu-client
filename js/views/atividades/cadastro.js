define([

    "collections/categoria",
    "../../../components/require/text!templates/atividades/cadastro.html",

    ], function(catCollection, cadastroAtivTpl) {

        var CadastroAtividadeView = Backbone.View.extend({

            el : $("#content"),

            render : function() {

                var data = {
                    categorias : catCollection.toJSON(),
                    categoria  : this.model,
                };

                this.$el.html(_.template(cadastroAtivTpl, data));

                return this;

            }
        });

        return CadastroAtividadeView;

});
