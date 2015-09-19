'use strict';

/* Controllers */

angular
.module('phonecatApp')
.controller('OrganizationController', ['$scope', '$rootScope', '$location', 'Organization',
    function ($scope, $rootScope, $location, Organization) {
        $scope.cancel = function () {
            // reset login status
            Organization.ClearRegistration();
            $location.path('/register');
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