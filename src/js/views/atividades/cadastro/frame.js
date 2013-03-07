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
                var atividade = {}, cids = [];

                console.log("cadastrando atividade");
                atividade = this.preparaDados();

                if (!_.isEmpty(atividade.err)) {
                    _.each(atividade.err, function (errMsg) {
                        this.subViews.alert.err
                            .setElement(this.$("#err"))
                            .render(errMsg);
                    }, this);
                } else {
                    _.each(atividade.comprovantes, function (file) {
                        var c = comprovanteCollection.create({nome:file.name}, {wait:true});
                        cids.push(c.get("id"));
                    });

                    atividade.comprovantes = cids;
                    this.subViews.alert.sucss
                        .setElement(this.$("#err"))
                        .render("Atividade cadastrada");

                    atividadeCollection.create(atividade);
                    this.resetDados();
                }
                console.log(atividade);
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
