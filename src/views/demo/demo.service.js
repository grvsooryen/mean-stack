(function() {
    'use strict';

    angular
        .module('app')
        .factory('demoService', demoService);

    demoService.$inject = ['$http'];

    /* @ngInject */
    function demoService($http) {
        var service = {
            contactlist: contactlist,
            addContact: addContact,
            removeContact: removeContact,
            editContact: editContact,
            updateContact: updateContact
        };

        return service;

        ////////////////

        function contactlist() {
            var req = {
                url: '/contact/list',
                method: 'GET'
            };

            return $http(req);
        }

        function addContact(data) {
            var req = {
                url: '/contact/add',
                method: 'POST',
                data: data
            };

            return $http(req);
        }

        function removeContact(id) {
            var req = {
                url: '/contact/remove/'  + id,
                method: 'DELETE'
            };

            return $http(req);
        }

        function editContact(id) {
            var req = {
                url: '/contact/edit/'  + id,
                method: 'GET'
            };

            return $http(req);
        }

        function updateContact(id, data) {
            var req = {
                url: '/contact/update/'  + id,
                method: 'PUT',
                data: data
            };

            return $http(req);
        }
    }

})();
