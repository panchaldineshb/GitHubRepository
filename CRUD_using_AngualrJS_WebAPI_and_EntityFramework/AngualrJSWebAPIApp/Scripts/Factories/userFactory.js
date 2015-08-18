'use strict';

var baseUrl = config.apiurl;

var url = baseUrl + 'api/User';

//the factory object for the webAPI call.
SarabiAngularApp.factory('userFactory', function ($http) {
    return {
        getUsers: function (callback) {
            $http.get(url).success(callback);
        }
        ,
        //method for insert
        insertUser: function (callback, user) {
            $http.post(url, user).success(callback);
        }
            ,
        //method for update
        updateUser: function (callback, user) {
            $http.put(url + '/' + user.Id, user).success(callback);
        }
        ,
        //method for delete
        deleteUser: function (callback, id) {
            $http.delete(url + '/' + id).success(callback);
        }
    }
});