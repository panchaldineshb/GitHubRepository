'use strict';

/* Controllers */

angular
.module('phonecatApp')
.controller('HomeController', ['$scope', 'Home',
    function ($scope, Home) {
        $scope.phones = Home.query();
        $scope.message = 'Hello from HomeController';
    }]);