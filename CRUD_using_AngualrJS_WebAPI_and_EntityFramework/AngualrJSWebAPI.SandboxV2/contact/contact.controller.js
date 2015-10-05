'use strict';

/* Controllers */

angular
.module('SarabiAngularJSApp')
.controller('ContactController', ['$scope', 'Contact',
    function ($scope, Contact) {
        $scope.phones = Contact.query();
        $scope.message = 'Hello from ContactController';
    }]);