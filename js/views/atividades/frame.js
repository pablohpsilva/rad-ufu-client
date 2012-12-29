define([

    "util/evAggregator",
    "../../../components/require/text!templates/atividades/frame.html"

    ], function(evAggregator, atividadesFrameTpl) {

        var AtividadesFrame = Backbone.View.extend({

            aggr : evAggregator,

            el : $("#content"),

            initialize : function() {

                this.aggr.on("view:atividades", this.render, this);
            },

            render : function(catSelecionada) {

                this.$el.html(_.template(atividadesFrameTpl));

                this.aggr.trigger("view:atividades:categorias", catSelecionada);
                this.aggr.trigger("view:atividades:tabela");

                return this;
            }

        });

        return AtividadesFrame;

});