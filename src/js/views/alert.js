//
// Módulo para renderização de alerts do bootstrap as options é um map {type, msg}
// o 'type' é um tipo de alert do bootstrap e 'msg' é a mensagem a ser exibida
//
define([

    "text!templates/alert.html"

], function (alertTpl) {

   var AlertView = Backbone.View.extend({
        el : "#err",

        render : function (options) {
            var args = (!options) ? {} : options;
            if(!args.type) args.type = "";

            this.$el.html(_.template(alertTpl, args));
        }
   });

   return AlertView;

});