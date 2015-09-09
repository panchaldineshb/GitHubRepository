'use strict';

/* Examples

This example is where Login logic was picked-up from:
http://jasonwatmore.com/post/2014/05/26/AngularJS-Basic-HTTP-Authentication-Example.aspx


Another example where structure is defined properly along with good promise objects:

http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx



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