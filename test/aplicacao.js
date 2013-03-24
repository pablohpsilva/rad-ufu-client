define([

    "../src/js/app",
    "collections/comprovante",
    "collections/atividade"

    ], function (App, comprovanteCollection, atividadeCollection) {

        describe('Aplicação', function () {
            beforeEach(function (done) {
                this.app = new App();
                this.cCollection = comprovanteCollection;
                this.aCollection = atividadeCollection;
                done();
            });
            it('Deve setar as urls da comprovanteCollection e da atividadeCollection', function (done) {
                this.cCollection.url.should.equal("localhost/rad-ufu/api/comprovante");
                this.aCollection.url.should.equal("localhost/rad-ufu/api/professor/1/atividade");
                done();
            });
        });
});