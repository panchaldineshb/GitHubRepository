/* global sessionserviceapp */

sessionserviceapp.controller('LoginController',
        ['$scope','$location','AuthenticationService', 
            function ($scope,  $location, AuthenticationService) {
                $scope.loginData = "logout";
                $scope.shakeMe = function () {
                    var l = 20;
                    for (var i = 0; i < 10; i++)
                        $("form").animate({'margin-left': "+=" + (l = -l) + 'px'}, 50);
                };
                // reset login status

                AuthenticationService.ClearCredentials();
                $scope.login = function () {
                    AuthenticationService.Login($scope.username, $scope.password, function (response) {
                        if (response === true) {
                            AuthenticationService.SetCredentials($scope.username, $scope.password);
                            $location.path('/main');
                              $scope.loginData = "logout";
                        } else {
                            $scope.shakeMe();
                            $scope.error = 'Felaktig användnamn eller lösenord';
                        }
                    });
                };
            }]);

