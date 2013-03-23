define([

    "collections/categoria"

    ], function (categoriaCollection) {

        describe('Categoria Collection', function () {
            describe('Interação com a API', function () {
                it('Deve carregar os dados das categorias', function (done) {
                    this.ajaxStub = sinon.stub($, "ajax").yieldsTo("success", [
                        {
                            "id": 1,
                            "nome": "Ensino"
                        },
                        {
                            "id": 2,
                            "nome": "Orientação"
                        },
                        {
                            "id": 3,
                            "nome": "Produção"
                        },
                        {
                            "id": 4,
                            "nome": "Pesquisa"
                        }
                    ]);

                    this.cCollection = categoriaCollection;
                    this.cCollection.url = "localhost/rad-ufu/api/categoria";
                    this.cCollection.fetch();
                    this.cCollection.should.have.length(4);
                    this.cCollection.at(0).get("id").should.equal(1);
                    this.cCollection.at(1).get("id").should.equal(2);
                    this.cCollection.at(2).get("id").should.equal(3);
                    this.cCollection.at(3).get("id").should.equal(4);
                    this.ajaxStub.restore();
                    done();
                });
            });
        });
});