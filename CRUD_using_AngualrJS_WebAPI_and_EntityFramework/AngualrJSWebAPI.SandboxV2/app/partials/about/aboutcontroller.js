'use strict';

/* Controllers */

angular.module('phonecatApp')
.service('About', function () { /* ... */ })
.controller('AboutController', ['About', function (About) {
    // Do something with myService
    $scope.message = 'Hello from AboutController';
}]);

/*
angular.module('phonecatApp').controller('AboutController', ['$scope', 'About',
  function ($scope, About) {
      $scope.message = 'Hello from AboutController';
  }]);


var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('AboutListController', ['$scope', 'About',
  function ($scope, About) {
      $scope.phones = About.query();
      $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('AboutDetailController', ['$scope', '$routeParams', 'About',
  function ($scope, $routeParams, About) {
      $scope.phone = About.get({ phoneId: $routeParams.phoneId }, function (phone) {
          $scope.mainImageUrl = phone.images[0];
      });

      $scope.setImage = function (imageUrl) {
          $scope.mainImageUrl = imageUrl;
      }
  }]);
*/