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

    ],  function(multCollection, comprCollection, ativCollection,
                 categoriaCollection,
                 tipoCollection,
                 Professor,
                 Tipo,
                 Mult,
                 Comp,
                 Ativ) {

        var dummydata = {};

        dummydata.load = function load() {
            var categorias = categoriaCollection;
            //categorias.localStorage = new Backbone.LocalStorage("categoria/");
            categorias.add({id:1, nome:"Ensino"});
            categorias.add({id:2, nome:"Orientação"});
            categorias.add({id:3, nome:"Produção"});
            categorias.add({id:4, nome:"Pesquisa"});

            var mult1 = {
                id:1,
                nome:"Aulas / Semana"
            };

            var mult2 = {
                id:2,
                nome:"Disciplinas"
            };

            var ensino1 = {
                id:1,
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
                categoria: categorias.get(1).get("id"),
                descricao: "Aula teórica ou prática para turmas adicionais da mesma disciplina, enquadrada"
                          +"na Situação 1 (ver OBS.), ou ministrada pelo mesmo docente para Cursos"
                          +"oferecidos em turnos distintos.",
                pontuacao: 10,
                limitePontos: 0,
                pontuacaoRef: 0,
                multiplicador: mult1.id
            };

            var ensino3 = {
                id: 4,
                categoria: categorias.get(1).get("id"),
                descricao: "Aula de graduação oferecida em regime especial, aprovado pelo Conselho da"
                          +"Unidade.",
                pontuacao: 10,
                limitePontos: 0,
                pontuacaoRef: 0,
                multiplicador: mult2.id
            };

            var comp1 = {id:1, arquivo:"", nome: "The X files.pdf"};
            var comp2 = {id:2, arquivo:"", nome: "Top Secret.pdf"};

            var ativ1 = {
                id:1,
                descricao:"Cupcake ipsum dolor sit amet. Faworki jujubes cheesecake "+
                    "macaroon halvah cupcake lollipop sweet roll. Cake chocolate wafer "+
                    "jujubes fruitcake chocolate. Cookie applicake candy canes. Croissant "+
                    "carrot cake caramels chupa chups icing I love bonbon powder. Cake I "+
                    "love I love topping marzipan I love.",
                inicio: "28/11/2012",
                fim: "29/11/2012",
                comprovantes: [comp1.id,comp2.id],
                tipo: ensino1.id,
                valorMult: 6
            };

            var ativ2 = {
                id:2,
                descricao:"descrição diferente",
                inicio: "29/11/2011",
                fim: "30/11/2011",
                tipo: ensino2.id,
                valorMult: 2
            };

            var oak = new Professor({id:1});

            oak.set("atividades", [ativ1.id, ativ2.id]);

            //ativCollection.localStorage = new Backbone.LocalStorage("professor/" +oak.get("id")+ "/atividade/");
            ativCollection.add([ativ1, ativ2]);

            //comprCollection.localStorage = new Backbone.LocalStorage("atividade/" + ativ1.id + "/comprovante/");
            comprCollection.add([comp1,comp2]);

            //tipoCollection.localStorage = new Backbone.LocalStorage("tipo/");
            tipoCollection.add([ensino1, ensino2, ensino3]);

            //multCollection.localStorage = new Backbone.LocalStorage("multiplicador/");
            multCollection.add([mult1,mult2]);

            console.log("dummydata generated");
            return oak;
        };

        dummydata.reset = function reset () {
            multCollection.reset();
            comprCollection.reset();
            ativCollection.reset();
            categoriaCollection.reset();
            tipoCollection.reset();
        };

        return dummydata;
});