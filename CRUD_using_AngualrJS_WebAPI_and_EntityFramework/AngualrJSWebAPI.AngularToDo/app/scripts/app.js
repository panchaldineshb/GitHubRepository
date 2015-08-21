var app = angular.module('angularTodo', ['ui.router', 'firebase']);

app.constant('FIREBASE_URL', 'https://anotherthingtodo.firebaseIO.com/');

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', 'home');
  $urlRouterProvider.otherwise('home');
  $stateProvider
    .state('home',{
      url: '/home',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('login',{
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .state('logout', {
      url: '/logout',
      templateUrl: 'scripts/login-register/login-logout/logout.html',
      controller: 'LoginCtrl',
      resolve: {
        logout: function(Auth){
       Auth.logout();
        }
      }
    })
    .state('register', {
      url: '/register',
      templateUrl: 'scripts/login-register/registration/register.html',
      controller: 'RegisterCtrl'
    })
    .state('secure', {
      abstract: true,
      template: '<div ui-view>',
      controller: 'SecureCtrl',
      resolve: {
        isLoggedIn: function(Auth){
          return Auth.isLoggedIn();
        }
      }
    })
    .state('secure.profile', {
      url: '/profile',
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl'
    });
});
