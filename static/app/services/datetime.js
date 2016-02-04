(function() {
    'use strict';

    function DateTimeService(APP_SETTINGS) {
        var tz = APP_SETTINGS.timezone;
        return {
            getAwareDateTime: function() {
                return moment().toDate();
            }
        };
    }

    angular
        .module('bennedetto')
        .service('DateTimeService', ['APP_SETTINGS', DateTimeService]);

}());
