define([

    "views/alerts/alert"

    ], function (AlertView) {

        var ErrorAlertView = AlertView.extend({
            data: {
                type: "alert-error",
                icon: "icon-exclamation-sign"
            }
        });

        return ErrorAlertView;
    });