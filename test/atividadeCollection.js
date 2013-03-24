define([

    "collections/atividade"

    ], function (atividadeCollection) {

        describe('Atividade Collection', function () {
            describe('Interação com a API', function () {
                beforeEach(function (done) {
                    this.Collection = atividadeCollection;
                    done();
                });
                afterEach(function (done) {
                    this.Collection.reset();
                    this.ajaxStub.restore();
                    done();
                });
                it('Deve carregar os dados das atividades', function (done) {
                    this.ajaxStub = sinon.stub($, "ajax").yieldsTo("success",[
                        {
                            "comprovantes": [
                                {
                                    "arquivo": "/home/yassin/",
                                    "id": 1,
                                    "nome": "The X files.pdf"
                                }
                            ],
                            "datafim": "2012-11-29",
                            "datainicio": "2012-11-28",
                            "descricao": "Cupcake ipsum dolor sit amet. Faworki jujubes cheesecake macaroon halvah cupcake lollipop sweet roll. Cake chocolate wafer jujubes fruitcake chocolate. Cookie applicake candy canes. Croissant carrot cake caramels chupa chups icing I love bonbon powder. Cake I love I love topping marzipan I love.",
                            "id": 1,
                            "tipo": {
                                "categoria": {
                                    "id": 1,
                                    "nome": "Ensino"
                                },
                                "descricao": "Aula teórica ou prática de disciplinas ministradas na Educação Básica, na Educação Profissional, em cursos de graduação ou pós-graduação stricto e lato sensu da UFU, sem remuneração complementar, aprovadas pelo Conselho da Unidade. Para disciplinas ministradas por mais de um docente, a pontuação deverá ser atribuída ao docente de acordo com a carga horária ministrada pelo mesmo. Turmas adicionais da mesma disciplina ministradas pelo docente serão pontuadas nos itens 02 e 03.",
                                "id": 1,
                                "limitePontos": null,
                                "multiplicador": {
                                    "id": 1,
                                    "nome": "Aulas / Semana"
                                },
                                "pontuacao": 10,
                                "pontuacaoRef": null
                            },
                            "valorMult": "6"
                        },
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
                        }
                    ]);

                    this.Collection.url = "localhost/rad-ufu/api/atividade";
                    this.Collection.fetch();
                    this.Collection.should.have.length(2);
                    this.Collection.at(0).get("id").should.equal(1);
                    this.Collection.at(1).get("id").should.equal(2);
                    done();
                });
            });
        });
});