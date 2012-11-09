var errorReporter = (function(){
  /**
   * Renderiza um bloco Bootstrap-Alert com uma mensagem de erro ou aviso
   *
   * @param  {jqXHR}   jqXHR    http://api.jquery.com/jQuery.ajax/#jqXHR
   * @param  {String}  msg      mensagem de erro ou aviso
   * @return {void}             objeto errorReporter
   */
  var report = function(jqXHR, msg){
    
    var template =
        '<div class = "alert alert-error alert-block span5 offset2">' +
          '<button type = "button" class = "close" data-dismiss = "alert" >' +
            '×' +
          '</button>' +
          '<p align = "center">' +
            '<strong>- Erro ' + jqXHR.status + ' -</strong><br/> ' + msg +
          '</p>' +
        '</div>';

    $('#error-wrapper').html(template);
  };

  return { report : report };
})();