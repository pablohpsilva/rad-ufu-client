define(function() {

        var Comprovante = Backbone.Model.extend({

            defaults : {
                //id
                nome: "",
                arquivo: null
            },

            // Thanks to StackOverflow (http://stackoverflow.com/questions/8171562)
            readFile: function () {
                var readr = new FileReader();

                readr.onload = (function (file, comprovante) {
                    return function (e) {
                        comprovante.set({nome: file.name, arquivo: e.target.result});
                    };
                })(this.get("arquivo"), this);

                readr.readAsDataURL(this.get("arquivo"));
            },

            validate : function(attrs) {
                //if(attrs.arquivo === null)
                    //return "arquivo não atribuído ao comprovante";
            }

        });

        return Comprovante;

});