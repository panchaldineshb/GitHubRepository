'use strict';

/* Services */

angular.module('phonecatApp')
.factory('Account', ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
    var service = {};

    var baseUrl = config.apiurl;

    var url = baseUrl + 'api/User';

    service.Login = function (username, password, callback) {
        /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
        $timeout(function () {
            var urlToMakeCall = url + '?Name=' + username;
            $http({ method: 'GET', url: urlToMakeCall }).
              success(function (data, status, headers, config) {
                  // this callback will be called asynchronously
                  // when the response is available
                  debugger;
              }).
              error(function (data, status, headers, config) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  debugger;
              });

            var response = { success: username === 'test' && password === 'test' };
            if (!response.success) {
                response.message = 'Username or password is incorrect';
            }
            callback(response);
        }, 1000);

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