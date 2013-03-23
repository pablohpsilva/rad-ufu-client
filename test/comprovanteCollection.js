define([

    "collections/comprovante"

    ], function (comprovanteCollection) {

        describe('Comprovante Collection', function () {
            describe('Interação com a API', function () {
                beforeEach(function (done) {
                    this.Collection = comprovanteCollection;
                    done();
                });
                afterEach(function (done) {
                    this.Collection.reset();
                    done();
                });
                it('Deve carregar os dados dos comprovantes', function (done) {
                    this.ajaxStub = sinon.stub($, "ajax").yieldsTo("success", [
                        {"id":1, "arquivo":"", "nome": "The X files.pdf"},
                        {"id":2, "arquivo":"", "nome": "Top Secret.pdf"}
                    ]);

                    this.Collection.url = "localhost/rad-ufu/api/comprovante";
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