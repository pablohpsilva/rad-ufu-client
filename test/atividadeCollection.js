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
                    done();
                });
                it('Deve carregar os dados das atividades', function (done) {
                    this.ajaxStub = sinon.stub($, "ajax").yieldsTo("success",[
                        {
                            "comprovantes": [],
                            "datafim": "2012-11-29",
                            "datainicio": "2012-11-28",
                            "descricao": "Cupcake ipsum dolor sit amet. Faworki jujubes cheesecake macaroon halvah cupcake lollipop sweet roll. Cake chocolate wafer jujubes fruitcake chocolate. Cookie applicake candy canes. Croissant carrot cake caramels chupa chups icing I love bonbon powder. Cake I love I love topping marzipan I love.",
                            "id": 1,
                            "tipo": 1,
                            "valorMult": "6"
                        },
                        {
                            "comprovantes": [],
                            "datafim": "2011-11-30",
                            "datainicio": "2011-11-29",
                            "descricao": "Descrição diferente",
                            "id": 2,
                            "tipo": 1,
                            "valorMult": "2"
                        }
                    ]);

                    this.Collection.url = "localhost/rad-ufu/api/atividade";
                    this.Collection.fetch();
                    this.Collection.should.have.length(2);
                    this.Collection.at(0).get("id").should.equal(1);
                    this.Collection.at(1).get("id").should.equal(2);
                    this.ajaxStub.restore();
                    done();
                });
            });
        });
});