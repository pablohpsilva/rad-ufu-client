$(function(){

  Atividade = Backbone.Model.extend({

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

  AtividadeView = Backbone.View.extend({

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

  Atividades = Backbone.Collection.extend({
    model : Atividade
  });

  AtividadesView = Backbone.View.extend({

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
        this._atividadeViews.push(new AtividadeView( {
          model : atividadeDeEnsino
        }));
      }, this);/* this is for binding */

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
      
      aV = new AtividadeView({model : Atividade});
      this._atividadeViews.push(aV);
      $(this.$el).append(aV.render().$el);
    }

  });

  var a2 = new Atividade({
    item_n : 5
   ,descricao : "Aula teórica para turmas com mais de 45 alunos na disciplina INF13"
   ,pontuacao : 4
   ,data_inicio : "13/10/2012"
   ,data_fim : "14/10/2012"
  });

  atividades = new Atividades([
    new Atividade({
      item_n : 1
     ,descricao : "Disciplina INF13: Organização de Computadores 2"
     ,pontuacao : 4
     ,data_inicio : "13/10/2012"
     ,data_fim : "14/10/2012"
    }),
    a2
  ]);

  var empty =  new Atividades();

  showMe = new AtividadesView({collection:atividades});
  showMe.render();

  var novaAtividade = function() {
    var atividade;

    atividade = new Atividade({
      item_n : $("#itemN").val()
     ,descricao : $("#descricao").val()
     ,data_inicio : $("#dataInicio").val()
     ,data_fim : $("#dataFim").val()
    });

    atividades.add(atividade);

    $("#NovaAtividadeModal").modal("hide");
  };

  $("#novaAtividade").click(function(e) {
    e.preventDefault();

    novaAtividade();

  });

});