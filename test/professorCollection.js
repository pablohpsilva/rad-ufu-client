define([

    "collections/professor"

    ], function (professorCollection) {

        describe('Professor Collection', function () {
            describe('Interação com a API', function () {
                it('Deve carregar os dados dos professores', function (done) {
                    this.ajaxStub = sinon.stub($, "ajax").yieldsTo("success", [
                        {
                            "atividades": [],
                            "id": 1,
                            "nome": "Girafales",
                            "siape": "12129idasdas"
                        }
                    ]);

                    this.Collection = professorCollection;
                    this.Collection.url = "localhost/rad-ufu/api/professor";
                    this.Collection.fetch();
                    this.Collection.should.have.length(1);
                    this.Collection.at(0).get("id").should.equal(1);
                    this.Collection.at(0).get("atividades").should.have.length(0);
                     this.Collection.at(0).get("siape").should.equal("12129idasdas");
                    this.ajaxStub.restore();
                    done();
                });
            });
        });
});