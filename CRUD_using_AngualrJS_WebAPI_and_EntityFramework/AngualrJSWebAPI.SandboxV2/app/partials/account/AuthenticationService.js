'use strict';

/* Services */

angular.module('phonecatApp')
.factory('AuthenticationService', ['$resource', '$http', '$cookieStore', '$rootScope', '$timeout',
  function ($resource, $http, $cookieStore, $rootScope, $timeout) {
      var service = {};

      service.Login = Login;
      service.SetCredentials = SetCredentials;
      service.ClearCredentials = ClearCredentials;

      return service;

      function Login(username, password, callback) {
      }

      function SetCredentials(username, password) {
      }
      function ClearCredentials() {
      }
  }])