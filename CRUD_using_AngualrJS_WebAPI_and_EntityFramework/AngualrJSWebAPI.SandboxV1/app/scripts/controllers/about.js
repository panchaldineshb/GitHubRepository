'use strict';

/**
 * @ngdoc function
 * @name angularjsDashboardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsDashboardApp
 */
angular.module('angularjsDashboardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
