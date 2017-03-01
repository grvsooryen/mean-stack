(function () {
    'use strict';

    angular
        .module('app', [
            'ui.bootstrap',
            'ui.router',
            'ngCookies',
            'app.demo'
        ])
        .constant('CONFIG', {});
})();