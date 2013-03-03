require([

    "chai",
    "models/categoria",
    "models/atividade",
    "models/comprovante",
    "models/multiplicador",
    "models/professor",
    "models/tipo"

], function (chai) {
    window.should = chai.should();
    mocha.run();
});