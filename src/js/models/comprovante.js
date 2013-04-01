define(function() {

        var Comprovante = Backbone.Model.extend({

            defaults : {
                //id
                nome: "",
                arquivo: ""
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

            sync: function (method, model, options) {
                var formData;

                if (method === "create") {
                    formData = new FormData();
                    formData.append(this.get("nome"), this.get("arquivo"));
                    formData.append("id_atividade", this.get("atividade"));
                    options.data = formData;
                    options.processData = false;
                    options.contentType = false;

                }

                console.log("comprovante > sync arguments: ", arguments);

                return Backbone.sync.apply(this, arguments);
            }
        });

        return Comprovante;
});