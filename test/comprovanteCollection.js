define([

    "collections/comprovante"

    ], function (comprovanteCollection) {

        describe('Comprovante Collection', function () {
            describe('Interação com a API', function () {
                it('Deve carregar os dados dos comprovantes', function (done) {
                    this.ajaxStub = sinon.stub($, "ajax").yieldsTo("success", [
                        {"id":1, "arquivo":"", "nome": "The X files.pdf"},
                        {"id":2, "arquivo":"", "nome": "Top Secret.pdf"}
                    ]);

                    this.cCollection = comprovanteCollection;
                    this.cCollection.url = "localhost/rad-ufu/api/comprovante";
                    this.cCollection.fetch();
                    this.cCollection.should.have.length(2);
                    this.cCollection.at(0).get("id").should.equal(1);
                    this.cCollection.at(1).get("id").should.equal(2);
                    this.ajaxStub.restore();
                    done();
                });
            });
        });
});