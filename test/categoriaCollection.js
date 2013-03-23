define([

    "collections/categoria"

    ], function (categoriaCollection) {

        describe('Categoria Collection', function () {
            describe('Interação com a API', function () {
                beforeEach(function (done) {
                    this.Collection = categoriaCollection;
                    done();
                });
                afterEach(function (done) {
                    this.Collection.reset();
                    done();
                });
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

                    this.Collection.url = "localhost/rad-ufu/api/categoria";
                    this.Collection.fetch();
                    this.Collection.should.have.length(4);
                    this.Collection.at(0).get("id").should.equal(1);
                    this.Collection.at(1).get("id").should.equal(2);
                    this.Collection.at(2).get("id").should.equal(3);
                    this.Collection.at(3).get("id").should.equal(4);
                    this.ajaxStub.restore();
                    done();
                });
            });
        });
});