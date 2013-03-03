define([

    "models/professor"

    ], function (Professor) {
        describe("Professor Model", function () {
            describe("Após inicialização (default)", function () {
                beforeEach(function (done) {
                    this.professor = new Professor();
                    done();
                });
                it("O nome deve ser uma string vazia", function (done) {
                    this.professor.get("nome").should.equal("");
                    done();
                });
                it("O siape deve ser uma string vazia", function (done) {
                    this.professor.get("siape").should.equal("");
                    done();
                });
                it("O array de ativiadades deve estar vazio", function (done) {
                    this.professor.get("atividades").should.have.length(0);
                    done();
                });
            });
        });
});