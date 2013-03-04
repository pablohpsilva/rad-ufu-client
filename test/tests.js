require([

    "sinon",
    "chai",
    "sinon-chai",
    "categoriaModel",
    "atividadeModel",
    "comprovanteModel",
    "multiplicadorModel",
    "professorModel",
    "tipoModel",
    "cadastroView"

], function (sinon, chai, sinonChai) {
    chai.use(sinonChai);
    window.should = chai.should();
    mocha.run();
});