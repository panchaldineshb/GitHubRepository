'use strict';

/* Example used was 
http://jasonwatmore.com/post/2014/05/26/AngularJS-Basic-HTTP-Authentication-Example.aspx
*/

/* Controllers */

angular
.module('phonecatApp')
.controller('AccountController', ['$scope', '$rootScope', '$location', 'Account',
    function ($scope, $rootScope, $location, Account) {
        // reset login status
        Account.ClearCredentials();

        $scope.logoff = function () {
            Account.ClearCredentials();
            $location.path('/');
        };

        $scope.login = function () {
            $scope.dataLoading = true;
            Account.Login($scope.username, $scope.password, function (response) {
                if (response.success) {
                    Account.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);