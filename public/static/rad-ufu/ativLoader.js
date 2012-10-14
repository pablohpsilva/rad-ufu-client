$('#items a').click(function (e) {
  e.preventDefault();
  atividade = $(this).attr('href');
  $.ajax({

    url: "atividades.php?",
    context: $('#tabela-atividades-wrapper'),
    data: {t : atividade},
    type: "GET",

    success: function(data){
      $('#error-wrapper').html('');
      $(this).html(data);
    },
    
    error: function(jqXHR, textStatus){
      $(this).html('');
      errorReporter.report('No momento não é possível carregar as atividades, tente mais tarde');
    }
  });
});