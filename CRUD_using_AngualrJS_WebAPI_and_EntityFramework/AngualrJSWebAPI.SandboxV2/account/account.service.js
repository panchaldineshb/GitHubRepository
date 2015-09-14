'use strict';

/* Services

angular.module('phonecatApp')
.factory('Contact', ['$resource',
  function ($resource) {
      return $resource('app/phones/:phoneId.json', {}, {
          query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
      });
  }])

var User = $resource('/user/:userId', { userId: '@id' });
var user = User.get({ userId: 123 }, function () {
    user.abc = true;
    user.$save();
});

angular.module('phonecatApp')
.factory("SweetFactory", ["$http", "$q", "$resource", function ($http, $q, $resource) {
    return $resource("/sweet/app", {}, {
        "put": {
            method: "PUT",
            isArray: false
        }, "get": {
            method: "GET",
            isArray: false
        }
    });
}]);

angular.module('phonecatApp')
.service('$job', function ($resource) {
    var job = $resource(service_base_url + 'jobs.json/:id');
    return job;
});

angular.module('phonecatApp')
.service('$job', function ($resource) {
    var job = $resource(service_base_url + 'jobs.json/:id', {}, {
        'query': {
            method: 'GET',
            isArray: true,
            interceptor: {
                'response': function (response) {
                    var headers = response.headers();
                    some_function(headers.user);
                    return response;
                }
            }
        }
    });
    return job;
});

*/

/*
Examples referred
http://www.masnun.com/2013/08/28/rest-access-in-angularjs-using-ngresource.html
http://devdactic.com/improving-rest-with-ngresource/

*/

// Authenticate Resource
angular.module('phonecatApp')
.factory('Authenticate', ['$resource',
    function ($resourceut) {
        var serviceBaseUrl = config.apiurl;
        var url = serviceBaseUrl + 'api/User?Name=:Name';

        return $resource(
           "'api/User?Name=:Name",
           { Name: "@Name" },
           {
               "update": { method: "PUT" },
               "reviews": { 'method': 'GET', 'params': { 'reviews_only': "true" }, isArray: true }
           }
       );
    }])

angular.module('phonecatApp')
.factory('Account', ['Base64', '$http', '$resource', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $resource, $cookieStore, $rootScope, $timeout) {
    var service = {};

    var serviceBaseUrl = config.apiurl;

    service.Login = function (username, password, callback) {
        /* Dummy authentication for testing, uses $timeout to simulate api call
           ----------------------------------------------*/

        // http://localhost:58045/api/User?Name=Shoya+Bali
        var url = serviceBaseUrl + 'api/User?Name=:Name';

        var User = $resource(url);

        User.get({ Name: username }).$promise.then(function (data) {
            // success
            var response = { success: password === data.User.Pin };
            if (!response.success) {
                response.message = 'Username or password is incorrect';
            }
            callback(response);
        }, function (errResponse) {
            // fail
            var response = { success: false, message: 'Username is invalid' };
            callback(response);
        });

        /* Use this for real authentication
           ----------------------------------------------*/
        //$http.post('/api/authenticate', { username: username, password: password })
        //    .success(function (response) {
        //        callback(response);
        //    });
    };

    service.SetCredentials = function (username, password) {
        var authdata = Base64.encode(username + ':' + password);

        $rootScope.globals = {
            currentUser: {
                username: username,
                authdata: authdata
            }
        };

        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
        $cookieStore.put('globals', $rootScope.globals);
    };

    service.ClearCredentials = function () {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic ';
    };

    return service;
}])