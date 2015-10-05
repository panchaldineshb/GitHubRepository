'use strict';

/* Services */

angular.module('SarabiAngularJSApp')
.factory('Home', ['$resource',
  function ($resource) {
      return $resource('app/phones/home.json', {}, {
          query: { method: 'GET', isArray: true }
      });
  }])
