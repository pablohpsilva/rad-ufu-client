define([

    "router",
    "views/navbar",
    "views/inicio",
    "views/atividades/frame",
    "views/atividades/entradaTabela",
    "views/atividades/tabela",
    "views/categorias/tabs",
    "util/dummyData"

    ], function(

        Router, NavBarView, InicioView, AtividadesViewFrame,
        AtividadesEntradaTabelaView, AtividadesViewTabela, CategoriasTabView,
        profOak) {

        return {

            init : function() {

                new NavBarView();
                new InicioView();
                new AtividadesViewFrame();
                new AtividadesEntradaTabelaView();

                // Collection passada é tomporária, será alterada quando
                // houver uma nova estratégia para os modelos
                new AtividadesViewTabela({collection : profOak.get("atividades")});

                new CategoriasTabView();
                new Router();
            }

        };

});