define([

    "models/atividade",
    "models/comprovante",
    "collections/atividade",
    "collections/comprovante",
    "views/atividades/cadastro/categorias",
    "views/atividades/cadastro/tipos",
    "views/alert",
    "text!templates/atividades/cadastro/frame.html"

    ], function(Atividade, Comprovante, atividadeCollection,
                comprovanteCollection, CategoriasView,
                TiposView,
                AlertView,
                cadastroAtivFrameTpl) {

        var CadastroAtividadeFrame = Backbone.View.extend({

            el : $("#content"),

            tpl: cadastroAtivFrameTpl,

            subViews : {
                categorias : null,
                tipos      : null,
                err        : new AlertView()
            },

            events: {
                "click #cadastrar": "criarAtividade"
            },

            initialize : function () {

                this.subViews.categorias = new CategoriasView();
                this.subViews.tipos      = new TiposView();

                this.on("close", this.limpaSubviews, this);

                this.listenTo(this.subViews.tipos, "close", this.catSemTipo, this);

                this.listenTo(this.subViews.tipos, "tipoSelected", this.catComTipo, this);

                this.listenTo(this.subViews.categorias, "change", this.renderTipos);

            },

            catSemTipo : function () {
                this.$("#dates-controls-block").hide();
            },

            catComTipo : function () {
                this.$("#dates-controls-block").show();
            },

            render : function () {

                this.$el.html(_.template(this.tpl, {
                    editar: false,
                    atual: this.options.atual
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

            renderTipos : function (idCategoria) {

                $("#tipos").empty();

                this.subViews.tipos
                    .setElement($("#tipos-block"))
                    .render(idCategoria);
            },

            resetDados: function () {
                _.each(_.omit(this.subViews, "err"), function (subView) {
                    if (subView.resetDados) subView.resetDados();
                });
                this.$("#dataInicio").val("");
                this.$("#dataFim").val("");
            },

            preparaDados: function () {
                var dataInicio, dataFim, dataFormato, dataLang, dadosCadastro = {};

                dadosCadastro.err = [];

                _.each(_.omit(this.subViews, "err"), function (subView) {
                    subView.preparaDados(dadosCadastro);
                });

                var dateParse = function (dateStr) {
                        var formato     = this.$("#dataInicio").data('date-format'),
                            lang        = this.$("#dataInicio").data('date-language');

                            formato  = $.fn.datepicker.DPGlobal.parseFormat(formato);
                    return $.fn.datepicker.DPGlobal.parseDate(dateStr, formato, lang);
                };

                dataInicio  = this.$("#dataInicio").val();
                dataFim     = this.$("#dataFim").val();

                if (!dataInicio) {
                    dadosCadastro.err.push("Escolha a data em que a atividade iniciou");
                } else if (!dataFim) {
                    dadosCadastro.err.push("Escolha a data em que a atividade terminou");
                } else if (dateParse(dataInicio) > dateParse(dataFim)) {
                    dadosCadastro.err.push("Escolha uma data de inicio anterior a data de fim");
                } else {
                    dadosCadastro.inicio = dataInicio;
                    dadosCadastro.fim    = dataFim;
                }

                return dadosCadastro;
            },

            criarAtividade: function () {
                var atividade = {}, cids = [];

                console.log("cadastrando atividade");
                atividade = this.preparaDados();

                if (!_.isEmpty(atividade.err)) {
                    _.each(atividade.err, function (errMsg) {
                        this.subViews.err
                            .setElement(this.$("#err"))
                            .render({ msg: errMsg, type: "alert-error" });
                    }, this);
                } else {
                    _.each(atividade.comprovantes, function (f) {
                        var c = comprovanteCollection.create({nome:f.name});
                        cids.push(c.get("id"));
                    });

                    atividade.comprovantes = cids;
                    this.subViews.err
                        .setElement(this.$("#err"))
                        .render({ msg: "Atividade cadastrada", type: "alert-success" });

                    atividadeCollection.create(atividade);
                    this.resetDados();
                }
                console.log(atividade);
            },

            limpaSubviews : function() {
                _.each(this.subViews, function (subView) {
                   subView.close();
                });
            }
        });

        return CadastroAtividadeFrame;

});
