'use strict';

/* Controllers */

angular.module('phonecatApp')
.service('Home', function () { /* ... */ })
.controller('HomeController', ['Home', function (Home) {
    // Do something with myService
    $scope.message = 'Hello from HomeController';
}]);

/*

angular.module('phonecatApp').controller('HomeController', ['$scope', 'Home',
  function ($scope, Home) {
      $scope.message = 'Hello from HomeController';
  }]);

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('HomeSvcListController', ['$scope', 'HomeSvc',
  function ($scope, HomeSvc) {
      $scope.phones = HomeSvc.query();
      $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('HomeSvcDetailController', ['$scope', '$routeParams', 'HomeSvc',
  function ($scope, $routeParams, HomeSvc) {
      $scope.phone = HomeSvc.get({ phoneId: $routeParams.phoneId }, function (phone) {
          $scope.mainImageUrl = phone.images[0];
      });

      $scope.setImage = function (imageUrl) {
          $scope.mainImageUrl = imageUrl;
      }
  }]);
*/