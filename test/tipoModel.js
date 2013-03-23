define([

    "models/tipo",
    "collections/categoria",
    "collections/multiplicador"

    ], function (Tipo, categoriaCollection, multCollection) {
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

            describe('Interação com a API', function () {
                beforeEach(function (done) {
                    this.tipo = new Tipo();
                    this.mCollection = multCollection;
                    this.cCollection = categoriaCollection;
                    done();
                });
                afterEach(function (done) {
                    this.mCollection.reset();
                    this.cCollection.reset();
                    done();
                });
                it('Deve adicionar o comprovante e o multiplicador as respectivas collections e guardar apenas os ids destes', function (done) {
                    var jsonResponseStub =
                        {
                            "categoria": {
                                "id": 1,
                                "nome": "Ensino"
                            },
                            "descricao": "Aula teórica ou prática para turmas adicionais da mesma disciplina, ministradapelo mesmo docente, e no mesmo Curso, enquadrada na Situação 2 (ver OBS.).",
                            "id": 3,
                            "limitePontos": null,
                            "multiplicador": {
                                "id": 1,
                                "nome": "Aulas / Semana"
                            },
                            "pontuacao": 5,
                            "pontuacaoRef": null
                        };

                    this.attrHash = this.tipo.parse(jsonResponseStub);

                    this.attrHash.categoria.should.equal(1);
                    this.attrHash.multiplicador.should.equal(1);
                    this.mCollection.should.have.length(1);
                    this.cCollection.should.have.length(1);
                    done();
                });
            });
        });
});