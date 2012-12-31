define([

    "../../../components/require/text!templates/atividades/cadastro.html",

    ], function(cadastroAtivTpl) {

        var CadastroAtividadeView = Backbone.View.extend({

            el : $("#content"),

            render : function(categoria) {

                this.$el.html(_.template(cadastroAtivTpl, {categoria:categoria}));

                return this;

            }
        });

        return CadastroAtividadeView;

});