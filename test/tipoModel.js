define([

    "models/tipo"

    ], function (Tipo) {
        describe("Tipo Model", function () {
            describe("Após inicialização (default)", function () {
                beforeEach(function (done) {
                    this.tipo = new Tipo();
                    done();
                });
                it("O id da categoria deve ser zero", function (done) {
                    this.tipo.get("categoria").should.equal(0);
                    done();
                });
                it("A descrição deve ser uma string vazia", function (done) {
                    this.tipo.get("descricao").should.equal("");
                    done();
                });
                it("A pontuação deve ser zero", function (done) {
                    this.tipo.get("pontuacao").should.equal(0);
                    done();
                });
                it("A pontuação limite deve ser zero", function (done) {
                    this.tipo.get("pontuacao").should.equal(0);
                    done();
                });
                it("A pontuação referência deve ser zero", function (done) {
                    this.tipo.get("pontuacao").should.equal(0);
                    done();
                });
                it("O id do multiplicador deve ser zero", function (done) {
                    this.tipo.get("categoria").should.equal(0);
                    done();
                });
            });
        });
});