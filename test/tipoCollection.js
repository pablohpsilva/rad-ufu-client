define([

    "collections/tipo"

    ], function (tipoCollection) {

        describe('Tipo Collection', function () {
            describe('Interação com a API', function () {
                beforeEach(function (done) {
                    this.Collection = tipoCollection;
                    done();
                });
                afterEach(function (done) {
                    this.Collection.reset();
                    done();
                });
                it('Deve carregar os dados dos tipos', function (done) {
                    this.ajaxStub = sinon.stub($, "ajax").yieldsTo("success", [
                        {
                            "categoria": {
                                "id": 1,
                                "nome": "Ensino"
                            },
                            "descricao": "Aula teórica ou prática para turmas adicionais da mesma disciplina, enquadrada na Situação 1 (ver OBS.), ou ministrada pelo mesmo docente para Cursos oferecidos em turnos distintos.",
                            "id": 2,
                            "limitePontos": null,
                            "multiplicador": {
                                "id": 1,
                                "nome": "Aulas / Semana"
                            },
                            "pontuacao": 10,
                            "pontuacaoRef": null
                        },
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
                        }
                    ]);

                    this.Collection.url = "localhost/rad-ufu/api/tipo";

                    this.Collection.fetch();

                    this.Collection.should.have.length(2);
                    this.Collection.at(0).get("id").should.equal(2);
                    this.Collection.at(1).get("id").should.equal(3);
                    this.ajaxStub.restore();

                    done();
                });
            });
        });
});