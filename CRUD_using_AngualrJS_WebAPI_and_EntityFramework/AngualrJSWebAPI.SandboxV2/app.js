'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngGrid',
  'ngRoute',
  'ngResource',
  'ngCookies'
]);

phonecatApp.config(['$routeProvider', '$locationProvider', '$httpProvider',
   function ($routeProvider, $locationProvider, $httpProvider) {
       $routeProvider.
         when('/', {
             templateUrl: 'home/home.view.html',
             controller: 'HomeController'
         }).
         when('/home', {
             templateUrl: 'home/home.view.html',
             controller: 'HomeController'
         }).
         when('/about', {
             templateUrl: 'about/about.view.html',
             controller: 'AboutController'
         }).
         when('/register', {
             templateUrl: 'organization/register.view.html',
             controller: 'OrganizationController'
         }).
         when('/role', {
             templateUrl: 'role/role.view.html',
             controller: 'RoleController'
         }).
         when('/sprint', {
             templateUrl: 'sprint/sprint.view.html',
             controller: 'SprintController'
         }).
         when('/product', {
             templateUrl: 'product/product.view.html',
             controller: 'ProductController'
         }).
         when('/login', {
             templateUrl: 'account/login.view.html',
             controller: 'AccountController'
         }).
         when('/logoff', {
             templateUrl: 'account/logoff.view.html',
             controller: 'AccountController'
         }).
         when('/contact', {
             templateUrl: 'contact/contact.view.html',
             controller: 'ContactController'
         }).
         when('/phones', {
             templateUrl: 'partials/phone-list.html',
             controller: 'PhoneListController'
         }).
         when('/phones/:phoneId', {
             templateUrl: 'partials/phone-detail.html',
             controller: 'PhoneDetailController'
         }).
         otherwise({
             redirectTo: '/'
         });

       $httpProvider.defaults.useXDomain = true;
       delete $httpProvider.defaults.headers.common['X-Requested-With'];
   }]);

phonecatApp.run(['$rootScope', '$location', '$cookieStore', '$http',
   function ($rootScope, $location, $cookieStore, $http) {
       // keep user logged in after page refresh
       $rootScope.globals = $cookieStore.get('globals') || {};
       if ($rootScope.globals.currentUser) {
           $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
       }

       $rootScope.$on('$locationChangeStart', function (event, next, current) {
           // redirect to login page if not logged in and trying to access a restricted page
           var restrictedPage = $.inArray($location.path(), ['/home', '/login', '/register']) === -1;
           var loggedIn = $rootScope.globals.currentUser;
           if (restrictedPage && !loggedIn) {
               $location.path('/login');
           }
       });
   }]);