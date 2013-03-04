define([

    "views/atividades/cadastro/frame",
    "util/dummyData"

    ],  function (CadastroFrame) {

        describe("Cadastro Atividades View", function () {
            describe("Renderização", function () {
                beforeEach(function (done) {
                    $("<div>").attr("id", "content").css("display", "none").appendTo("body");
                    this.cadastroView = new CadastroFrame();
                    this.cadastroView.render();
                    done();
                });
                afterEach(function (done) {
                    this.cadastroView.remove();
                    $(".datepicker").remove();
                    done();
                });
                it("O select de categorias deve ser renderizado", function (done) {
                    this.cadastroView.subViews
                    .categorias.$el.find("#categoria-selector")
                    .should.have.length(1);
                    done();
                });
                it("O select de tipos deve ser renderizado", function (done) {
                    this.cadastroView.subViews
                    .tipos.$el.find("#tipo-selector")
                    .should.have.length(1);
                    done();
                });
                it("O textarea da descrição deve ser renderizado", function (done) {
                    this.cadastroView.subViews.tipos.subViews
                    .descricao.$el.find("#descricao")
                    .should.have.length(1);
                    done();
                });
                it("O input do valor do multiplicador deve ser renderizado", function (done) {
                    this.cadastroView.subViews.tipos.subViews
                    .multiplicador.$el.find("#quantidade")
                    .should.have.length(1);
                    done();
                });
                it("O input dos arquivos comprovantes deve ser renderizado", function (done) {
                    this.cadastroView.subViews.tipos.subViews
                    .comprovantes.$el.find("#comprovantes")
                    .should.have.length(1);
                    done();
                });
                it("O input para a data de inicio deve ser renderizado", function (done) {
                    this.cadastroView.$el.find("#dataInicio").should.have.length(1);
                    done();
                });
                it("O input para a data de fim deve ser renderizado", function (done) {
                    this.cadastroView.$el.find("#dataFim").should.have.length(1);
                    done();
                });
            });
            describe("Interação", function () {
                beforeEach(function (done) {
                    $("<div>").attr("id", "content").css("display", "none").appendTo("body");
                    this.renderTiposSpy = sinon.spy(CadastroFrame.prototype, "renderTipos");
                    this.cadastroView = new CadastroFrame();
                    this.cadastroView.render();
                    done();
                });
                afterEach(function (done) {
                    CadastroFrame.prototype.renderTipos.restore();
                    this.cadastroView.remove();
                    $(".datepicker").remove();
                    done();
                });
                it("As informações do tipo devem ser atualizadas se a categoria mudar", function (done) {
                    this.cadastroView.subViews
                        .categorias.trigger("change", $("#categoria-selector").val());
                        console.log(this.renderTiposSpy.should);
                    this.renderTiposSpy.should.have.been.calledTwice;
                    done();
               });
            });
        });
    });