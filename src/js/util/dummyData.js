define([

    "collections/multiplicador",
    "collections/comprovante",
    "collections/atividade",
    "collections/categoria",
    "collections/tipo",
    "models/professor",
    "models/tipo",
    "models/multiplicador",
    "models/comprovante",
    "models/atividade"

    ],  function(multCollection, comprCollection, ativCollection, categoriaCollection, tipoCollection, Professor, Tipo, Mult, Comp, Ativ) {

        var categorias = categoriaCollection;
        categorias.localStorage = new Backbone.LocalStorage("categoria/");
        categorias.create({id:1, nome:"Ensino"});
        categorias.create({id:2, nome:"Orientação"});
        categorias.create({id:3, nome:"Produção"});
        categorias.create({id:4, nome:"Pesquisa"});

        var mult1 = {
            id:1,
            nome:"Aulas por semana"
        };

        var ensino1 = {
            id:1,
            item:1,
            categoria: categorias.get(1).get("id"),
            descricao: "Aula teórica ou prática de disciplinas ministradas na Educação Básica, na"
                      +"Educação Profissional, em cursos de graduação ou pós-graduação stricto e lato"
                      +"sensu da UFU, sem remuneração complementar, aprovadas pelo Conselho da"
                      +"Unidade. Para disciplinas ministradas por mais de um docente, a pontuação"
                      +"deverá ser atribuída ao docente de acordo com a carga horária ministrada pelo"
                      +"mesmo. Turmas adicionais da mesma disciplina ministradas pelo docente serão"
                      +"pontuadas nos itens 02 e 03.",
            pontuacao: 10,
            limitePontos: 0,
            pontuacaoRef: 0,
            multiplicador: mult1.id
        };

        var ensino2 = {
            id:2,
            item:2,
            categoria: categorias.get(1).get("id"),
            descricao: "Aula teórica ou prática para turmas adicionais da mesma disciplina.",
            pontuacao: 8,
            limitePontos: 0,
            pontuacaoRef: 0
        };

        var comp1 = {id:1, arquivo:"the X files"};

        var ativ1 = {
            id:1,
            descricao:"",
            inicio: "28/12/2012",
            fim: "29/12/2012",
            comprovantes: [comp1.id],
            tipo: ensino1.id,
            valorMult: 6
        };

        var ativ2 = {
            id:2,
            descricao:"descrição diferente",
            inicio:"30/12/2012",
            fim:"31/12/2012",
            tipo: ensino2.id,
            valorMult: 2
        };

        var oak = new Professor({id:1});

        oak.set("atividades", [ativ1.id, ativ2.id]);

        ativCollection.localStorage = new Backbone.LocalStorage("professor/" +oak.get("id")+ "/atividade/");
        ativCollection.add([ativ1, ativ2]);

        comprCollection.localStorage = new Backbone.LocalStorage("atividade/" + ativ1.id + "/comprovante/");
        comprCollection.add([comp1]);

        tipoCollection.localStorage = new Backbone.LocalStorage("tipo/");
        tipoCollection.add([ensino1, ensino2]);

        multCollection.localStorage = new Backbone.LocalStorage("multiplicador/");
        multCollection.add([mult1]);

        return oak;

});