'use strict';

/* Controllers */

angular
.module('phonecatApp')
.controller('SprintController', ['$scope', '$rootScope', '$location', 'Sprint',
    function ($scope, $rootScope, $location, Sprint) {
        $scope.userData = [];

        $scope.gridOptions = {
            data: 'userData',
            multiSelect: false,
            showGroupPanel: true,
            showColumnMenu: true,
            enableFiltering: true,
            columnDefs: [
                { field: 'Name', displayName: 'Name', width: '20%', cellTemplate: '<div>{{row.entity.Name}}</div>' },
                { field: 'Description', displayName: 'Description', width: '25%' },
                { field: 'CreatedOn', displayName: 'CreatedOn', width: '10%' },
                { field: 'Active', displayName: 'Active', width: '5%' },
                { field: 'Purged', displayName: 'Purged', width: '5%' },
                { field: 'Display', displayName: 'Display', width: '5%' },
                { displayName: 'Options', cellTemplate: '<input type="button" ng-click="setScope(row.entity,\'edit\')" name="edit" class="btn btn-large btn-warning" value="Edit">&nbsp;<input type="button" ng-click="DeleteUser(row.entity.id)" name="delete" class="btn btn-large btn-danger" value="Delete">', width: '30%' }
            ]
        };

        $scope.init = function () {
            $scope.all();
        };

        $scope.all = function () {
            $scope.dataLoading = true;
            Sprint.GetAll(function (response) {
                if (response.success && response.data) {
                    $scope.userData = response.data;
                } else {
                    $scope.error = response.message;
                }
            });
            $scope.dataLoading = false;
        };

        $scope.cancel = function () {
            // reset login status
            $scope.dataLoading = true;
            Sprint.ClearRegistration($scope.Name, $scope.Description, $scope.City, $scope.Address, $scope.ContactNo, $scope.EmailId, function (response) {
                if (response.success) {
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };

        $scope.register = function () {
            $scope.dataLoading = true;
            Sprint.Register($scope.Name, $scope.Description, $scope.City, $scope.Address, $scope.ContactNo, $scope.EmailId, function (response) {
                if (response.success) {
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);