'use strict';

/* Controllers */

angular
    .module('cookbook', [])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.emcee = 'Kool G Rap';
    }])


expect($scope.emcee).toEqual('Kool G Rap');