'use strict';

/* Controllers */

angular
.module('phonecatApp')
.controller('OrganizationController', ['$scope', 'Contact',
    function ($scope, Organization) {
        $scope.phones = Organization.query();
        $scope.message = 'Hello from OrganizationController';
    }]);