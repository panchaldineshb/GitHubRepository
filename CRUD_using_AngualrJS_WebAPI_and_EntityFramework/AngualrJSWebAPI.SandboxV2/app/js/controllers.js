'use strict';

/* Controllers */

angular.module('phonecatApp')
.service('Home', function () { /* ... */ })
.controller('HomeController', ['$scope', 'Home',
  function ($scope, Home) {
      $scope.message = 'Hello from HomeController';
  }]);

angular.module('phonecatApp')
.service('About', function () { /* ... */ })
.controller('AboutController', ['$scope', 'About',
  function ($scope, About) {
      $scope.message = 'Hello from AboutController';
  }]);

angular.module('phonecatApp')
.service('Contact', function () { /* ... */ })
.controller('ContactController', ['$scope', 'Contact',
  function ($scope, Contact) {
      $scope.message = 'Hello from ContactController';
  }]);

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListController', ['$scope', 'Phone',
  function ($scope, Phone) {
      $scope.phones = Phone.query();
      $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailController', ['$scope', '$routeParams', 'Phone',
  function ($scope, $routeParams, Phone) {
      $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
          $scope.mainImageUrl = phone.images[0];
      });

      $scope.setImage = function (imageUrl) {
          $scope.mainImageUrl = imageUrl;
      }
  }]);