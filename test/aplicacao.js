define([

    "../src/js/app",
    "collections/comprovante",
    "collections/atividade",
    "collections/categoria"

    ], function (App, comprovanteCollection, atividadeCollection, categoriaCollection) {

        describe('Aplicação', function () {
            beforeEach(function (done) {
                this.app = new App();
                this.cCollection = comprovanteCollection;
                this.aCollection = atividadeCollection;
                this.atividadeCollectionFetchStub = sinon.stub(atividadeCollection, "fetch")
                    .returns("success");
                this.categoriaCollectionFetchStub = sinon.stub(categoriaCollection, "fetch")
                    .returns("success");
                done();
            });
            afterEach(function (done) {
                this.atividadeCollectionFetchStub.restore();
                this.categoriaCollectionFetchStub.restore();
                done();
            });
            it('Deve setar as urls da comprovanteCollection e da atividadeCollection', function (done) {
                this.app.bootstrapCollections();
                this.cCollection.url.should.equal("api/comprovante");
                this.aCollection.url.should.equal("api/professor/1/atividade");
                done();
            });
        });
});