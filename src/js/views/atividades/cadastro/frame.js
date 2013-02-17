define([

    "models/atividade",
    "models/comprovante",
    "collections/comprovante",
    "views/atividades/cadastro/categorias",
    "views/atividades/cadastro/tipos",
    "views/alert",
    "text!templates/atividades/cadastro/frame.html",

    ], function(Atividade, Comprovante, comprovanteCollection, CategoriasView,
                TiposView,
                AlertView,
                cadastroAtivFrameTpl) {

        var CadastroAtividadeFrame = Backbone.View.extend({

            el : $("#content"),

            subViews : {
                categorias : new CategoriasView(),
                tipos      : new TiposView(),
                err        : new AlertView()
            },

            events: {
                "click #cadastrar": "criarAtividade"
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

            criarAtividade: function () {
                var atividade, dados, fileInput, comprovantes;

                dados = {};

                dados.categoria    = this.$("#categoria-selector").val();
                dados.tipo         = this.$("#tipo-selector").val();
                dados.descricao    = this.$("#descricao").val();
                dados.valorMult    = this.$("#quantidade").val();
                dados.inicio       = this.$("#dataInicio").val();
                dados.fim          = this.$("#dataFim").val();
                fileInput          = this.$("#comprovantes")[0];
                comprovantes       = [];

                //console.log(fileInput);
                comprovantes = _.map(fileInput.files, function (file) {
                    var c = new Comprovante({arquivo:file});
                    c.readFile();
                    return c;
                });

                atividade = new Atividade(dados);
                console.log(atividade, comprovantes);
            },

            limpaSubviews : function() {
                _.each(this.subViews, function (subView) {
                   subView.close();
                });
            }
        });

        return CadastroAtividadeFrame;

});
