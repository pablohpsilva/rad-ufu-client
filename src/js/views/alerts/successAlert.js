define([

    "views/alerts/alert"

    ], function (AlertView) {

        var SuccessAlertView = AlertView.extend({
            data: {
                type: "alert-success",
                icon: "icon-ok"
            },

            cleanUp: function () {
                this.$(".alert-error").each(function () {
                    this.remove();
                });
            }
        });

        return SuccessAlertView;
    });