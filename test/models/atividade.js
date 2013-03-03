define([

    "../../src/js/models/atividade"

    ],  function (Atividade) {

        describe("Atividade Model", function () {
            describe("Após inicialização (default)", function () {

                beforeEach(function (done) {
                    this.atividade = new Atividade();
                    done();
                });

                it("A descrição default deve ser uma string vazia", function (done) {
                    this.atividade.get("descricao").should.equal("");
                    done();
                });

                it("A data de inicio deve ser uma string vazia", function (done) {
                    this.atividade.get("inicio").should.equal("");
                    done();
                });

                it("A data de fim deve ser uma string vazia", function (done) {
                    this.atividade.get("fim").should.equal("");
                    done();
                });

                it("O array de comprovantes deve estar vazio", function (done) {
                    this.atividade.get("comprovantes").should.have.length(0);
                    done();
                });

                it("O id do tipo de atividade deve ser zero", function (done) {
                    this.atividade.get("tipo").should.equal(0);
                    done();
                });

                it("O valor do multiplicador deve ser zero", function (done) {
                    this.atividade.get("valorMult").should.equal(0);
                    done();
                });
            });
        });
    });