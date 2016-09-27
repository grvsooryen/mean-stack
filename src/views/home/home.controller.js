(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var _this = this;
        
        activate();

        ////////////////

        function activate() {}
    }

})();