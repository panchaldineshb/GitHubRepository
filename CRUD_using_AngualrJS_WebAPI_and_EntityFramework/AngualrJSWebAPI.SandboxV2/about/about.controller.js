'use strict';

/* Controllers */

angular
.module('phonecatApp')
.controller('AboutController', ['$scope', 'About',
    function ($scope, About) {
        $scope.phones = About.query();
        $scope.message = 'Hello from AboutController';
    }]);