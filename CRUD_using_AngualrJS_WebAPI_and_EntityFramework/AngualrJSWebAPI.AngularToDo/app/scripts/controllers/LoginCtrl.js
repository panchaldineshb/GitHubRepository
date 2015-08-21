app.controller('LoginCtrl', function($scope, $state, Auth){
  $scope.user = {};
  $scope.login = function(){
    var userObj = {
      email: $scope.user.email,
      password: $scope.user.pw
    };

    $scope.user.email = '';
    $scope.user.pw = '';

    Auth.login(userObj, function(){
      $state.go('secure.profile');
    });
  };
});
