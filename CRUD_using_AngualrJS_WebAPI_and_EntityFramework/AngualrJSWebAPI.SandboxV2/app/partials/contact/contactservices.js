'use strict';

/* Services */

/*
var aboutServices = angular.module('aboutServices', ['ngResource']);

aboutServices.factory('Phone', function ($http) {
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


aboutServices.factory('About', ['$resource',
  function ($resource) {
      return $resource('phones/:phoneId.json', {}, {
          query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
      });
  }]);
*/