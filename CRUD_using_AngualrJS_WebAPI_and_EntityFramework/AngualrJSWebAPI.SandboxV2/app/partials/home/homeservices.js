'use strict';

/* Services */

angular.module('phonecatApp')
.factory('Home', ['$resource',
  function ($resource) {
      return $resource('phones/home.json', {}, {
          query: { method: 'GET', isArray: true }
      });
  }])
