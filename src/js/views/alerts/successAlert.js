define([

    "views/alerts/alert"

    ], function (AlertView) {

        var SuccessAlertView = AlertView.extend({
            data: {
                type: "alert-success",
                icon: "icon-ok"
            },

            clearErrors: function () {
                this.$(".alert-error").each(function () {
                    this.remove();
                });
            },
            render : function (msg) {
                this.data.msg = msg;
                this.clearErrors();
                this.$el.append(_.template(this.tpl, this.data));
            }
        });

        return SuccessAlertView;
    });