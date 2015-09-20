'use strict';

/* Controllers */

angular
.module('phonecatApp')
.controller('OrganizationController', ['$scope', '$rootScope', '$location', 'Organization',
    function ($scope, $rootScope, $location, Organization) {
        $scope.userData = [];

        getOrganizations();

        function getOrganizations() {
            $scope.dataLoading = true;
            Organization.GetAll(function (response) {
                debugger;
                if (response.success) {
                    $scope.userData = response.data;
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        }

        $scope.gridOptions = {
            data: 'userData',
            multiSelect: false,
            showGroupPanel: true,
            showColumnMenu: true,
            enableFiltering: true,
            columnDefs: [{ field: 'Name', displayName: 'Name', width: '20%', cellTemplate: '<div>{{row.entity.Name}}</div>' },
                { field: 'City', displayName: 'City', width: '15%' },
                { field: 'Address', displayName: 'Address', width: '15%' },
                { field: 'ContactNo', displayName: 'Contact No', width: '10%' },
                { field: 'EmailId', displayName: 'Email Id', width: '10%' },
                { displayName: 'Options', cellTemplate: '<input type="button" ng-click="setScope(row.entity,\'edit\')" name="edit" class="btn btn-large btn-warning" value="Edit">&nbsp;<input type="button" ng-click="DeleteUser(row.entity.id)" name="delete" class="btn btn-large btn-danger" value="Delete">', width: '30%' }
            ]
        };

        $scope.cancel = function () {
            // reset login status
            Organization.ClearRegistration();
            $location.path('/register');
        };

        $scope.list = function () {
            $scope.dataLoading = true;
            Organization.GetAll(function (data) {
                debugger;
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
            Organization.Register($scope.Name, $scope.Description, $scope.City, $scope.Address, $scope.ContactNo, $scope.EmailId, function (response) {
                debugger;
                if (response.success) {
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);