'use strict';

/* Services */

angular.module('SarabiAngularJSApp')
.factory('Contact', ['$resource',
  function ($resource) {
      return $resource('app/phones/:phoneId.json', {}, {
          query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
      });
  }])
