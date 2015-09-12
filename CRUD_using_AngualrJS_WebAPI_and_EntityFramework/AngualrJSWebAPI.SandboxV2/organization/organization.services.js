'use strict';

/* Services */

angular.module('phonecatApp')
.factory('Organization', ['$resource',
  function ($resource) {
      return $resource('app/phones/:phoneId.json', {}, {
          query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
      });
  }])
