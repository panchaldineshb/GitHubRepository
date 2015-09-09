'use strict';

/* Services */

angular.module('phonecatApp')
.factory('Organization', ['$resource',
  function ($resource) {
      return $resource('phones/:phoneId.json', {}, {
          query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
      });
  }])
