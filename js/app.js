define([

    "router",
    "views/app/navbar",
    "views/inicio/frame",
    "views/atividades/frame",
    "views/atividades/tabela",
    "views/atividades/tabs",
    "util/dummyData"

    ], function(

        Router, NavBarView, InicioView, AtividadesViewFrame,
        AtividadesViewTabela, CategoriasTabView, profOak ) {

        return {

            init : function() {

                new NavBarView();
                new InicioView();
                new AtividadesViewFrame();

                // Collection passada é tomporária, será alterada quando
                // houver uma nova estratégia para os modelos
                new AtividadesViewTabela({collection : profOak.get("atividades")});

                new CategoriasTabView();
                new Router();
            }

        };

});