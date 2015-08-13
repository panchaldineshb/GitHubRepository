'use strict';

/**
 * @ngdoc overview
 * @name myAngularAppApp
 * @description
 * # myAngularAppApp
 *
 * Main module of the application.
 */
var usersApp = angular.module('usersApp', [
    'ngGrid',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]);

var baseUrl = config.apiurl;

var url = baseUrl + 'api/User';

//the factory object for the webAPI call.
usersApp.factory('userRepository', function ($http) {
    return {
        getUsers: function (callback) {
            $http.get(url).success(callback);
            alert(url);
        }
        ,
        //method for insert
        insertUser: function (callback, user) {
            var user = { "id": user.Id, "city": user.City, "name": user.Name, "address": user.Address, "contactNo": user.ContactNo, "emailId": user.EmailId };
            $http.post(url, user).success(callback);
        }
            ,
        //method for update
        updateUser: function (callback, user) {
            var user = { "id": user.Id, "city": user.City, "name": user.Name, "address": user.Address, "contactNo": user.ContactNo, "emailId": user.EmailId };
            $http.put(url + '/' + user.Id, user).success(callback);
        }
        ,
        //method for delete
        deleteUser: function (callback, id) {
            $http.delete(url + '/' + id).success(callback);
        }
    }
});

//controller
usersApp.controller('userCtrl', function ($scope, userRepository) {
    getUsers();

    function getUsers() {
        userRepository.getUsers(function (results) {
            $scope.userData = results;
        })
    }

    $scope.setScope = function (obj, action) {
        $scope.action = action;
        $scope.New = obj;
    }

    $scope.gridOptions = {
        data: 'userData',
        showGroupPanel: true,
        columnDefs: [{ field: 'Name', displayName: 'Name', width: '15%' },
            { field: 'City', displayName: 'City', width: '15%' },
            { field: 'Address', displayName: 'Address', width: '15%' },
            { field: 'ContactNo', displayName: 'Contact No', width: '15%' },
            { field: 'EmailId', displayName: 'Email Id', width: '15%' },
            { displayName: 'Options', cellTemplate: '<input type="button" ng-click="setScope(row.entity,\'edit\')" name="edit"  value="Edit">&nbsp;<input type="button" ng-click="DeleteUser(row.entity.id)"  name="delete"  value="Delete">', width: '25%' }
        ]
    };

    $scope.update = function () {
        if ($scope.action == 'edit') {
            userRepository.updateUser(function () {
                $scope.status = 'user updated successfully';
                alert('user updated successfully');
                getUsers();
            }, $scope.New)
            $scope.action = '';
        }
        else {
            userRepository.insertUser(function () {
                alert('user inserted successfully');
                getUsers();
            }, $scope.New)
        }
    }

    $scope.DeleteUser = function (id) {
        userRepository.deleteUser(function () {
            alert('User deleted');
            getUsers();
        }, id)
    }
});