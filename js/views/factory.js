define([

    "views/app/navbar",
    "views/atividades/frame",
    "views/atividades/cadastro",
    "views/inicio/frame",
    "views/relatorio/frame",
    "views/ajuda/frame"

    ], function(Navbar, AtividadesFrame, CadastroAtividadesFrame, InicioFrame, RelatorioFrame, AjudaFrame) {

        var ViewFactory = Backbone.Model.extend({

            create : function(view, options) {

                switch(view) {

                    case "navbar" :
                        return new Navbar(options);

                    case "inicio" :
                        return new InicioFrame(options);

                    case "atividades" :
                        return new AtividadesFrame(options);

                    case "atividades:cadastro" :
                        return new CadastroAtividadesFrame(options);

                    case "relatorio" :
                        return new RelatorioFrame(options);

                    case "ajuda" :
                        return new AjudaFrame(options);

                    default:
                        return new InicioFrame();

                }
            }
        });

        return ViewFactory;
    }
);