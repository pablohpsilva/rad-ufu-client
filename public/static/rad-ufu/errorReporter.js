var errorReporter = (function(){
  var report = function(jqXHR, msg){
    
    var template =
      '<div class = "row">' +
        '<div class = "alert alert-error alert-block span6 offset3">' +
          '<button type = "button" class = "close" data-dismiss = "alert" >' +
            '×' +
          '</button>' +
          '<p align = "center">' +
            '<strong>Erro ' + jqXHR.status + ':</strong> ' + msg +
          '</p>' +
        '</div>' +
      '</div>';

    $('#error-wrapper').html(template);
  };

  return { report : report };
})($);