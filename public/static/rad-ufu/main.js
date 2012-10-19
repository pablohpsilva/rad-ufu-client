$(function(){
  var App = {};

  App.Atividade = Backbone.Model.extend({

    defaults : {
      item_n      : 0
     ,descricao   : "sem descrição"
     ,pontuacao   : 0
     ,data_inicio : "01/01/2000"
     ,data_fim    : "02/01/2000"
    },

    initialize : function() {
      console.log("incializada atividade: " + this.id);
     }

  });

  App.AtividadeView = Backbone.View.extend({

    tagName : "tr",

    template : _.template($("#atividade-tpl").html()),

    render : function() {
      console.log("Atividade View: rendering...");
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    initialize : function() {
      this.model.bind("change", this.render, this);
    }

  });

  App.Atividades = Backbone.Collection.extend({
    model : App.Atividade
  });

  App.AtividadesView = Backbone.View.extend({

    el : $("#tabela-atividades"),
    
    initialize : function() {
      this.collection.bind("add", this.addOne, this);
      this.collection.bind("remove", this.render, this);
      this.render();
    },

    render : function() {
      console.log("Atividades View: rendering...");

      $(this.$el).empty();
      this._atividadeViews = [];

      //cria uma sub-view 'Atividade' para cada el da collection
      this.collection.each(function(atividadeDeEnsino) {
        this._atividadeViews.push(new App.AtividadeView({
          model : atividadeDeEnsino
        }));
      }, this);/*this is for binding*/

      if(!($.isEmptyObject(this._atividadeViews))) {
        //append cada sub-view 'Atividade' ao elemento da view
        _(this._atividadeViews).each(function(atividadeView) {
          atividadeView.render();
          $(this.$el).append(atividadeView.$el);
        }, this);/*this is for binding*/

      } else {
        $(this.$el).append("No momento não existem atividades");
      }

      return this;
    },

    addOne : function(Atividade) {
      var aV;

      console.log("Atividades View: adding one...");
      
      if($.isEmptyObject(this._atividadeViews)) {
        $(this.$el).empty();
      }
      
      aV = new App.AtividadeView({model : Atividade});
      this._atividadeViews.push(aV);
      $(this.$el).append(aV.render().$el);
    }

  });

  var a2 = new App.Atividade({
    item_n : 5
   ,descricao : "Aula teórica para turmas com mais de 45 alunos na disciplina INF13"
   ,pontuacao : 4
   ,data_inicio : "13/10/2012"
   ,data_fim : "14/10/2012"
  });

  App.atividades = new App.Atividades([
    new App.Atividade({
      item_n : 1
     ,descricao : "Disciplina INF13: Organização de Computadores 2"
     ,pontuacao : 4
     ,data_inicio : "13/10/2012"
     ,data_fim : "14/10/2012"
    }),
    a2
  ]);

  var empty =  new App.Atividades();

  App.showMe = new App.AtividadesView({collection:App.atividades});
  App.showMe.render();

  App.novaAtividade = function() {
    var atividade;

    atividade = new App.Atividade({
      item_n : $("#itemN").val()
     ,descricao : $("#descricao").val()
     ,data_inicio : $("#dataInicio").val()
     ,data_fim : $("#dataFim").val()
    });

    App.atividades.add(atividade);

    $("#NovaAtividadeModal").modal("hide");
  };

  window.App = App;
});