(function () {
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
                .then(function (res) {
                    refreshlist();
                    _this.contact = {};
                });
        }

        function removeContact(id) {
            demoService.removeContact(id)
                .then(function (res) {
                    refreshlist();
                    _this.contact = {};
                    _this.editmode = false;
                });
        }

        function editContact(id) {
            _this.editmode = true;
            demoService.editContact(id)
                .then(function (res) {
                    _this.contact = res.data;
                });
        }

        function updateContact(id) {
            demoService.updateContact(id, _this.contact)
                .then(function (res) {
                    refreshlist();
                    _this.contact = {};
                    _this.editmode = false;
                });
        }

        function refreshlist() {
            demoService.contactlist()
                .then(function (res) {
                    _this.contactList = res.data;
                });
        }
    }

})();