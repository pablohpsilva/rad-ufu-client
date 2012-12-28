define([

    "collections/categoria",
    "models/professor",
    "models/tipoAtividade",
    "models/multiplicador",
    "models/comprovante",
    "models/atividade"

    ],  function(categoriaCollection, Professor, Tipo, Mult, Comp, Ativ) {

        var categorias = categoriaCollection;
        categorias.create({id:1, nome:"Ensino"});
        categorias.create({id:2, nome:"Orientação"});
        categorias.create({id:3, nome:"Produção"});
        categorias.create({id:4, nome:"Pesquisa"});

        var tipo = new Tipo({
            id:1,
            codigo:1,
            categoria: categorias.get(1),
            descricao: "blablabla",
            pontuacao: 2,
            limitePontos: 80,
            pontuacaoRef: 1,
        });

        tipo.get("multiplicadores").create({
            id:1,
            nome:"mult",
            valor:10,
            limite:11
        });

        tipo.get("multiplicadores").create({
            id:2,
            nome:"multiplic",
            valor:5,
            limite:10
        });

        var ativ = new Ativ({
            id:1,
            descricao:"",
            inicio: new Date(),
            fim: new Date(),
            tipo:tipo
        });

        ativ.get("comprovantes").create({id:1,arquivo:"the X files"});

        oak = new Professor({id:1});
        oak.get("atividades").add(ativ);

        return oak;

});