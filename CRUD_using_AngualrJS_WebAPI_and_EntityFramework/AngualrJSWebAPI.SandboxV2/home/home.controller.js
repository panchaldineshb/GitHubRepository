'use strict';

/* Controllers */

angular
.module('SarabiAngularJSApp')
.controller('HomeController', ['$scope', 'Home',
    function ($scope, Home) {
        $scope.phones = Home.query();
        $scope.message = 'Hello from HomeController';
    }]);