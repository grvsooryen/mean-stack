(function() {
    'use strict';

    angular
        .module('app.demo')
        .controller('DemoController', DemoController);

    DemoController.$inject = ['demoService'];

    /* @ngInject */
    function DemoController(demoService) {
        var _this = this;

        _this.contactList = [];
        _this.contact = {};
        _this.editmode = false;

        _this.addContact = addContact;
        _this.editContact = editContact;
        _this.removeContact = removeContact;
        _this.updateContact = updateContact;

        activate();

        ////////////////

        function activate() {
            refreshlist();
        }

        function addContact() {
            demoService.addContact(_this.contact)
                .success(function(res) {
                    refreshlist();
                    _this.contact = {};
                });
        }

        function removeContact(id) {
            demoService.removeContact(id)
                .success(function(res) {
                    refreshlist();
                    _this.contact = {};
                });
        }

        function editContact(id) {
            _this.editmode = true;
            demoService.editContact(id)
                .success(function(res) {
                    _this.contact = res;
                });
        }

        function updateContact(id) {
            demoService.updateContact(id, _this.contact)
                .success(function(res) {
                    refreshlist();
                    _this.contact = {};
                    _this.editmode = false;
                });
        }

        function refreshlist() {
            demoService.contactlist()
                .success(function(res) {
                    _this.contactList = res;
                });
        }
    }

})();
