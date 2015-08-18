'use strict';

var baseUrl = config.apiurl;

var url = baseUrl + 'api/Organization';

//the factory object for the webAPI call.
SarabiAngularApp.factory('organizationFactory', function ($http) {
    return {
        getOrganizations: function (callback) {
            $http.get(url).success(callback);
        }
        ,
        //method for insert
        insertOrganization: function (callback, organization) {
            $http.post(url, organization).success(callback);
        }
            ,
        //method for update
        updateOrganization: function (callback, organization) {
            $http.put(url + '/' + organization.Id, organization).success(callback);
        }
        ,
        //method for delete
        deleteOrganization: function (callback, id) {
            $http.delete(url + '/' + id).success(callback);
        }
    }
});