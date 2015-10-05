'use strict';

/* Services

angular.module('SarabiAngularJSApp')
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

angular.module('SarabiAngularJSApp')
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

angular.module('SarabiAngularJSApp')
.service('$job', function ($resource) {
    var job = $resource(service_base_url + 'jobs.json/:id');
    return job;
});

angular.module('SarabiAngularJSApp')
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

// Authenticate Resource
angular.module('SarabiAngularJSApp')
.factory('Authenticate', ['$resource',
    function ($resource) {
        var serviceBaseUrl = config.apiurl;
        var url = serviceBaseUrl + 'api/User';
        return $resource(url, {});
    }])



*/

/*

Examples referred
http://www.masnun.com/2013/08/28/rest-access-in-angularjs-using-ngresource.html
http://devdactic.com/improving-rest-with-ngresource/
http://www.4byte.cn/question/442009/angular-1-0-8-resource-with-multiple-optional-get-parameters.html


If you need parameters to be mapped to the query parameters, not the path parameters, 
you should not put the name of parameters into the path Eg student resource should look like this.:

var  Student = $resource( '/app/student/' , 
    {} 
);
Then invocation like this will work without any problems:

Student . get ({ ID : 12 , courseId : 55 }); ? // Calls / app / student / ID = 12 & courseId = 55 
Student . get ({ ID : 12 }); // Calls / app / student / ID? = 12 
Student . get ({ courseId : 55 }); // Calls / app / student / courseId = 55?

The others cases will work as well. Just do not confuse path parameters with query parameters.

*/



angular.module('SarabiAngularJSApp')
.factory('Account', ['Base64', '$http', '$resource', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $resource, $cookieStore, $rootScope, $timeout) {
    var service = {};

    var serviceBaseUrl = config.apiurl;

    service.Login = function (username, password, callback) {
        /* Dummy authentication for testing, uses $timeout to simulate api call
           ----------------------------------------------*/

        // http://localhost:58045/api/User?Name=Shoya+Bali
        var url = serviceBaseUrl + 'api/User';

        // we need parameters to be mapped to the query parameters, not the path parameters
        var User = $resource(url, {});

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