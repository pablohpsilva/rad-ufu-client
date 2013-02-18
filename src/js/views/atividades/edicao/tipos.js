define([

    "views/atividades/cadastro/tipos",
    "views/atividades/cadastro/descricao",
    "views/atividades/cadastro/multiplicador",
    "views/atividades/cadastro/comprovantes"

    ],  function (TiposCadastroView, DescricaoCadastroView,
                  MultiplicadoresCadastroView,
                  ComprovantesCadastroView) {

        var TiposEdicaoView = TiposCadastroView.extend({

            initialize: function () {
                this.subViews.descricao = new DescricaoCadastroView({
                    atual: this.model.get("descricao")
                });

                this.subViews.multiplicador = new MultiplicadoresCadastroView({
                    atual: this.model.get("valorMult")
                });

                this.subViews.comprovantes = new ComprovantesCadastroView({
                    atuais: this.model.get("comprovantes")
                });

                this.on("close", this.limpaSubviews, this);
                this.on("tipoSelected", this.tipoSelected, this);
            }
        });

        return TiposEdicaoView;

});