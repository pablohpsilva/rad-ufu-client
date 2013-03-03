define([

    "../../src/js/models/comprovante"

    ], function (Comprovante) {

        describe("Comprovante Model", function () {
            describe("Após inicialização (default)", function () {

                beforeEach(function (done) {
                    this.comprovante = new Comprovante();
                    done();
                });
                it("O nome do arquivo deve ser uma string vazia", function (done) {
                    this.comprovante.get("nome").should.equal("");
                    done();
                });
                it("O arquivo (representa o caminho para download) deve ser uma string vazia", function (done) {
                    this.comprovante.get("arquivo").should.equal("");
                    done();
                });
            });
        });
});