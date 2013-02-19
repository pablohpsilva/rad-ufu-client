define([

    "views/atividades/cadastro/comprovantes"

    ], function (ComprovanteCadastroView) {

        var ComprovanteEdicaoView = ComprovanteCadastroView.extend({

            render: function () {
                var data = {};

                data.atuais       = [];
                data.selecionados = this.selecionados;
                //
                // Se já existem comprovantes para a atividade, busca os comprovantes
                // na collection
                //
                data.atuais = this.collection.chain()
                    .filter(function (c) {
                        return _.contains(this.options.atuais, c.id);
                    }, this)
                    .map(function (c) {
                        return c.toJSON();
                    }).value();


                this.$el.html(_.template(this.tpl, data));
                // inicializa os tooltips
                this.$("[rel=\"tooltip\"]").tooltip();

                this.registraHovers();

                //console.log(data.atuais);
                return this;
            }
        });

        return ComprovanteEdicaoView;
});