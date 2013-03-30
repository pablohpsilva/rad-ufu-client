define([

    "models/atividade",
    "models/comprovante",
    "collections/atividade",
    "collections/comprovante",
    "views/atividades/cadastro/categorias",
    "views/atividades/cadastro/tipos",
    "views/alerts/successAlert",
    "views/alerts/errorAlert",
    "text!templates/atividades/cadastro/frame.html"

    ], function(Atividade, Comprovante, atividadeCollection,
                comprovanteCollection, CategoriasView,
                TiposView,
                SuccessAlertView,
                ErrorAlertView,
                cadastroAtivFrameTpl) {

        var CadastroAtividadeFrame = Backbone.View.extend({

            el : "#content",

            tpl: cadastroAtivFrameTpl,

            subViews : {
                categorias : null,
                tipos      : null,
                alert: {
                    sucss      : new SuccessAlertView(),
                    err        : new ErrorAlertView()
                }
            },

            events: {
                "click #cadastrar": "criarAtividade"
            },

            initialize : function () {

                this.subViews.categorias = new CategoriasView();
                this.subViews.tipos      = new TiposView();

                this.on("close", this.cleanUp, this);

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
                _.each(_.omit(this.subViews, "alert"), function (subView) {
                    if (subView.resetDados) subView.resetDados();
                });
                this.$("#dataInicio").val("");
                this.$("#dataFim").val("");
            },

            preparaDados: function () {
                var dataInicio, dataFim, dataFormato, dataLang, dadosCadastro = {};

                dadosCadastro.err = [];

                _.each(_.omit(this.subViews, "alert"), function (subView) {
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
                var atividade = {}, cids = [], comprovantes;

                console.log("cadastrando atividade");
                atividade = this.preparaDados();
                comprovantes = atividade.comprovantes;

                var comprovanteCriado = _.bind(function (atividade) {
                    return _.bind(function (comprovante) {
                        atividade.addComprovante(comprovante);
                        if (atividade.get("comprovantes").length === _.keys(comprovantes).length)
                            this.alert("Atividade cadastrada com sucesso", { type: "success" });
                    }, this);
                }, this);

                var criarComprovantes = function (atividade) {
                    _.each(comprovantes, function (file) {
                        var c = { nome: file.name, arquivo: file, atividade: atividade.get("id") };
                        comprovanteCollection.create(c, { success: comprovanteCriado(atividade) });
                    });
                };

                if (!_.isEmpty(atividade.err)) {
                    _.each(atividade.err, function (errMsg) {
                        this.alert(errMsg, { type: "err" });
                    }, this);
                } else {
                    atividade = _.omit(atividade, "err", "comprovantes");
                    atividadeCollection.create(atividade, { success: criarComprovantes });
                }
            },

            alert: function (message, options) {
                var alertTypes = {
                    err:   this.subViews.alert.err,
                    success: this.subViews.alert.sucss
                };

                alertTypes[options.type].setElement("#err").render(message);
            },

            cleanUp: function() {
                $(".datepicker").remove();
                _.each(_.omit(this.subViews,"alert"), function (subView) {
                   subView.close();
                });
            }
        });

        return CadastroAtividadeFrame;

});
