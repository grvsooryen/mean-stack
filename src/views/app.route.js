(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    /* @ngInject */
    function config ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/views/home/home.html',
                controller: 'HomeController as home'
                //title: 'Default home title'
            })
            .state('help', {
                url: '/help',
                templateUrl: 'src/views/help/help.html',
                controller: 'HelpController as help'
            })
            .state('demo', {
                url: '/demo',
                templateUrl: 'src/views/demo/demo.html',
                controller: 'DemoController as demo'
            });
            

        $urlRouterProvider.otherwise('/');

        //initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get.Pragma = 'no-cache';
    }
})();