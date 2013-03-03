define([

    "models/multiplicador"

    ], function (Multiplicador) {
        describe("Multiplicador Model", function () {
            describe("Após inicialização (default)", function () {
                beforeEach(function (done) {
                    this.multiplicador = new Multiplicador();
                    done();
                });
                it("O nome deve ser uma string vazia", function (done) {
                    this.multiplicador.get("nome").should.equal("");
                    done();
                });
            });
        });
});