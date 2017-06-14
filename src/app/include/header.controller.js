(function() {
    'use strict';

    angular
        .module('app')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope', '$location'];
    function HeaderController($scope, $location) {
        var _this = this;
        
         $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };

        activate();

        ////////////////

        function activate() { }
    }
})();