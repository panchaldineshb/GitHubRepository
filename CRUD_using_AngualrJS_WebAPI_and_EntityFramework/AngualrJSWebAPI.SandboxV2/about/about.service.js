'use strict';

/* Services */

angular.module('SarabiAngularJSApp')
.factory('About', ['$resource',
  function ($resource) {
      return $resource('app/phones/about.json', {}, {
          query: { method: 'GET', isArray: true }
      });
  }])
