define([

    "collections/multiplicador"

    ], function (multiplicadorCollection) {

        describe('Multiplicador Collection', function () {
            describe('Interação com a API', function () {
                it('Deve carregar os dados dos multiplicadors', function (done) {
                    this.ajaxStub = sinon.stub($, "ajax").yieldsTo("success", [
                        {"id":1, "nome":"Aulas / Semana"},
                        {"id":2, "nome":"Disciplinas"}
                    ]);

                    this.Collection = multiplicadorCollection;
                    this.Collection.url = "localhost/rad-ufu/api/multiplicador";
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