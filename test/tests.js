require([

    "chai",
    "categoriaModel",
    "atividadeModel",
    "comprovanteModel",
    "multiplicadorModel",
    "professorModel",
    "tipoModel",
    "cadastroView"

], function (chai) {
    window.should = chai.should();
    mocha.run();
});