'use strict';

/* Services */

angular.module('phonecatApp')
.factory('About', ['$resource',
  function ($resource) {
      return $resource('phones/about.json', {}, {
          query: { method: 'GET', isArray: true }
      });
  }])
