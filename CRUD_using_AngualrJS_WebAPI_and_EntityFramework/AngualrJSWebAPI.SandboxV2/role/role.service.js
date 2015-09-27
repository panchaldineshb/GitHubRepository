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
.factory('Role', ['$resource', '$cookieStore', '$rootScope', '$timeout',
    function ($resource, $cookieStore, $rootScope, $timeout) {
        var service = {};

        var serviceBaseUrl = config.apiurl;

        // http://localhost:58045/api/Role?Name=Administrator
        var url = serviceBaseUrl + 'api/Role';

        // we need parameters to be mapped to the query parameters, not the path parameters
        // referred --
        // http://devdactic.com/improving-rest-with-ngresource/
        // https://docs.angularjs.org/api/ngResource/service/$resource#creating-a-custom-put-request
        // http://devdactic.com/improving-rest-with-ngresource/
        // http://stackoverflow.com/questions/17131643/promise-on-angularjs-resource-save-action

        var Entity = $resource(url, {});

        service.GetAll = function (callback) {
            Entity.query({ FetchAll: true })
                .$promise.then(function (data) { // success
                    callback({ success: true, data: data });
                }, function (errResponse) { // fail
                    var response = { success: false, message: 'Failed to query...' };
                    callback(response);
                });
        };

        service.Register = function (name, description, city, address, contactNo, emailId, callback) {
            /* Dummy authentication for testing, uses $timeout to simulate api call
           ----------------------------------------------*/

            Entity.save({ Name: name, Description: description, City: city, Address: address, ContactNo: contactNo, EmailId: emailId })
                .$promise.then(function (data) { // success
                    callback({ success: true });
                }, function (errResponse) { // fail
                    var response = { success: false, message: 'Failed to save...' };
                    callback(response);
                });
        };

        service.ClearRegistration = function (name, description, city, address, contactNo, emailId, callback) {
            /* Right now there is not much logic being added
           ----------------------------------------------*/

            callback({ success: true });
        };

        return service;
    }])