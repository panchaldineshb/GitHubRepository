'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

/*
phonecatServices.factory('Phone', function ($http) {
    var req = { method: 'GET', url: 'phones/phones.json', params: { phoneId: 'phones' }, isArray: true };

    var json = $http(req).then(function (response) {
        return response.data;
    });

    var Phone = function (data) {
        if (data) angular.copy(data, this);
    };

    Phone.query = function () {
        return json.then(function (data) {
            return data.map(function (project) {
                return new Phone(project);
            });
        })
    };

    Phone.get = function (id) {
        return json.then(function (data) {
            var result = null;
            angular.forEach(data, function (project) {
                if (project.id == id) result = new Phone(project);
            });
            return result;
        })
    };

    return Phone;
});
*/

phonecatServices.factory('Phone', ['$resource',
  function ($resource) {
      return $resource('app/phones/:phoneId.json', {}, {
          query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
      });
  }]);