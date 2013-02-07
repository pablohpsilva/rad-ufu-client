define([

    "collections/categoria",
    "collections/tipo",
    "models/professor",
    "models/tipo",
    "models/multiplicador",
    "models/comprovante",
    "models/atividade"

    ],  function(categoriaCollection, tipoCollection, Professor, Tipo, Mult, Comp, Ativ) {

        var categorias = categoriaCollection;
        categorias.create({id:1, nome:"Ensino"});
        categorias.create({id:2, nome:"Orientação"});
        categorias.create({id:3, nome:"Produção"});
        categorias.create({id:4, nome:"Pesquisa"});

        var ensino1 = new Tipo({
            id:1,
            codigo:1,
            categoria: categorias.get(1),
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
        });

        tipoCollection.create({
            //id:1,
            codigo:2,
            categoria: categorias.get(1),
            descricao: "Aula teórica ou prática para turmas adicionais da mesma disciplina.",
            pontuacao: 8,
            limitePontos: 0,
            pontuacaoRef: 0,
        });

        tipoCollection.add(ensino1);

        ensino1.get("multiplicadores").create({
            id:1,
            nome:"Aulas por semana",
            valor:6,
        });

        var ativ = new Ativ({
            id:1,
            descricao:"",
            inicio: "28/12/2012",
            fim: "29/12/2012",
            tipo:ensino1
        });

        var ativ2 = new Ativ({
            id:2,
            descricao:"descrição diferente",
            inicio:"30/12/2012",
            fim:"31/12/2012",
            tipo:ensino1
        })

        ativ.get("comprovantes").create({id:1,arquivo:"the X files"});

        oak = new Professor({id:1});
        oak.get("atividades").add([ativ,ativ2]);

        return oak;

});