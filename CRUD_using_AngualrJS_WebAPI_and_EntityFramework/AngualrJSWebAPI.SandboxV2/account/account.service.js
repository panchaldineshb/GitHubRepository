'use strict';

/* Services

angular.module('phonecatApp')
.factory('Contact', ['$resource',
  function ($resource) {
      return $resource('app/phones/:phoneId.json', {}, {
          query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
      });
  }])

*/

/*
Examples referred
http://www.masnun.com/2013/08/28/rest-access-in-angularjs-using-ngresource.html
http://devdactic.com/improving-rest-with-ngresource/

*/


// Authenticate Resource
angular.module('phonecatApp')
.factory('Authenticate', ['Base64', '$http', '$resource', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $resource, $cookieStore, $rootScope, $timeout) {
        var baseUrl = config.apiurl;
        var url = baseUrl + 'api/User?Name=:Name';

        return $resource(
           "/api/booking/:Id",
           { Id: "@Id" },
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

    var baseUrl = config.apiurl;

    service.Login = function (username, password, callback) {
        /* Dummy authentication for testing, uses $timeout to simulate api call
           ----------------------------------------------*/

        // http://localhost:58045/api/User?Name=Shoya+Bali
        var url = baseUrl + 'api/User?Name=:Name';

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