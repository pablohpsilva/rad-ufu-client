define([

    "models/atividade",
    "collections/tipo",
    "collections/comprovante"

    ],  function (Atividade, tipoCollection, comprovanteCollection) {

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

            describe('Interação com a API', function () {
                beforeEach(function (done) {
                    this.atividade   = new Atividade();
                    this.tCollection = tipoCollection;
                    this.cCollection = comprovanteCollection;
                    done();
                });
                afterEach(function (done) {
                    this.tCollection.reset();
                    this.cCollection.reset();
                    done();
                });
                it('Deve adicionar o tipo e os comprovantes nas respectivas collections e guardar apenas os ids destes', function (done) {
                    var jsonResponseStub =
                        {
                            "comprovantes": [
                                {
                                    "arquivo": "/home/yassin/",
                                    "id": 2,
                                    "nome": "Top Secret.pdf"
                                }
                            ],
                            "datafim": "2011-11-30",
                            "datainicio": "2011-11-29",
                            "descricao": "Descrição diferente",
                            "id": 2,
                            "tipo": {
                                "categoria": {
                                    "id": 1,
                                    "nome": "Ensino"
                                },
                                "descricao": "Aula teórica ou prática de disciplinas ministradas na Educação Básica...",
                                "id": 1,
                                "limitePontos": null,
                                "multiplicador": {
                                    "id": 1,
                                    "nome": "Aulas / Semana"
                                },
                                "pontuacao": 10,
                                "pontuacaoRef": null
                            },
                            "valorMult": "2"
                        };
                    this.attrHash = this.atividade.parse(jsonResponseStub);

                    this.attrHash.comprovantes[0].should.equal(2);
                    this.attrHash.tipo.should.equal(1);
                    this.tCollection.should.have.length(1);
                    this.cCollection.should.have.length(1);
                    done();
                });
            });
        });
    });