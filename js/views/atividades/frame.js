define([

    "util/evAggregator",
    "../../../components/require/text!templates/atividades/frame.html"

    ], function(evAggregator, atividadesFrameTpl) {

        var AtividadesFrame = Backbone.View.extend({

            el : $("#content"),

            initialize : function() {

                this.listenTo(evAggregator, "view:atividades", this.render);
            },

            render : function(catSelecionada) {

                this.$el.html(_.template(atividadesFrameTpl));

                evAggregator.trigger("view:atividades:categorias", catSelecionada);
                evAggregator.trigger("view:atividades:tabela");

                return this;
            }

        });

        return AtividadesFrame;

});