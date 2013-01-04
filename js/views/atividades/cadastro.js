define([

    "../../../components/require/text!templates/atividades/cadastro.html",

    ], function(cadastroAtivTpl) {

        var CadastroAtividadeView = Backbone.View.extend({

            el : $("#content"),

            render : function() {

                this.$el.html(_.template(cadastroAtivTpl, {categoria:this.model}));

                return this;

            }
        });

        return CadastroAtividadeView;

});
