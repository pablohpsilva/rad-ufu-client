var errorReporter = (function(){
  var report = function(msg){
    
    var template = 
      '<div class = "row">' +
        '<div class = "alert alert-error span6 offset3">' +
          '<button type = "button" class = "close" data-dismiss = "alert" >' +
            '×' +
          '</button>' + msg +
        '</div>' +
      '</div>';

    $('#error-wrapper').html(template);
  };

  return { report : report };
})($);