'use strict';

app.controller('AuthCtrl', function ($scope, $location, Auth, user) {
  if (user) {
    $location.path('/users/:userId');
  }

  $scope.login = function () {
    Auth.login($scope.user).then(function () {
      $location.path('/users/:userId');
    }, function (error) {
      $scope.error = error.toString();
    });
  };

  $scope.register = function () {
    Auth.register($scope.user).then(function(user) {
      return Auth.login($scope.user).then(function() {
        user.username = $scope.user.username;
        return Auth.createProfile(user);
      }).then(function() {
        $location.path('/users/:userId');
      });
    }, function(error) {
      $scope.error = error.toString();
    });
  };
});
