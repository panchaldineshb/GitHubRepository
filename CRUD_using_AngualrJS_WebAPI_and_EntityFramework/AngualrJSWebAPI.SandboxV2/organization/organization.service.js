'use strict';

/* Services
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

angular.module('phonecatApp')
.factory('Organization', ['$resource', '$cookieStore', '$rootScope', '$timeout',
    function ($resource, $cookieStore, $rootScope, $timeout) {
        var service = {};

        var serviceBaseUrl = config.apiurl;

        // http://localhost:58045/api/Organization?Name=Shoya+Bali
        var url = serviceBaseUrl + 'api/Organization';

        // we need parameters to be mapped to the query parameters, not the path parameters
        // referred -- http://devdactic.com/improving-rest-with-ngresource/
        var Organization = $resource(url, { id: "@id" });

        service.Register = function (name, city, address, contactNo, emailId, callback) {
            /* Dummy authentication for testing, uses $timeout to simulate api call
           ----------------------------------------------*/

            Organization.save({ Name: name })
                .$promise.then(function (data) {
                // success
                var response = { success: password === data.Organization.Pin };
                if (!response.success) {
                    response.message = 'Organizationname or password is incorrect';
                }
                callback(response);
            }, function (errResponse) {
                // fail
                var response = { success: false, message: 'Organizationname is invalid' };
                callback(response);
            });
        };

        service.ClearRegistration = function () {
        };

        return service;
    }])