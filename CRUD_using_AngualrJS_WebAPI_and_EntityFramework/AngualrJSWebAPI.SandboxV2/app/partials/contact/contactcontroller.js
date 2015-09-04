'use strict';

/* Controllers */

angular.module('phonecatApp')
.factory('Contact', ['$resource',
  function ($resource) {
      return $resource('phones/:phoneId.json', {}, {
          query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
      });
  }])
.controller('ContactController', ['$scope', 'Contact',
  function ($scope, Contact) {
      $scope.phones = Contact.query();
      $scope.message = 'Hello from ContactController';
  }]);

/*
angular.module('phonecatApp').controller('ContactController', ['$scope', 'Contact',
  function ($scope, Contact) {
      $scope.message = 'Hello from ContactController';
  }]);

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('ContactListController', ['$scope', 'Contact',
  function ($scope, Contact) {
      $scope.phones = Contact.query();
      $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('ContactDetailController', ['$scope', '$routeParams', 'Contact',
  function ($scope, $routeParams, Contact) {
      $scope.phone = Contact.get({ phoneId: $routeParams.phoneId }, function (phone) {
          $scope.mainImageUrl = phone.images[0];
      });

      $scope.setImage = function (imageUrl) {
          $scope.mainImageUrl = imageUrl;
      }
  }]);
*/