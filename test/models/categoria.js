define([

    "../../src/js/models/categoria"

    ], function (Categoria) {

        describe("Categoria Model", function () {
            describe("Após inicialização (default)", function () {
                beforeEach(function (done) {
                    this.categoria = new Categoria();
                    done();
                });
                it("O nome deve ser uma string vazia", function (done) {
                    this.categoria.get("nome").should.equal("");
                    done();
                });
            });
        });
    });