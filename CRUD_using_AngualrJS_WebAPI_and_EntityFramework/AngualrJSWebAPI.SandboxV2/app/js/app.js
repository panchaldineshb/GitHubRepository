'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'ngResource',
  'ngCookies',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider', '$locationProvider', '$httpProvider',
   function ($routeProvider, $locationProvider, $httpProvider) {
       $routeProvider.
         when('/', {
             templateUrl: 'partials/home/home.html',
             controller: 'HomeController'
         }).
         when('/home', {
             templateUrl: 'partials/home/home.html',
             controller: 'HomeController'
         }).
         when('/about', {
             templateUrl: 'partials/about/about.html',
             controller: 'AboutController'
         }).
         when('/register', {
             templateUrl: 'partials/organization/register.html',
             controller: 'OrganizationController'
         }).
         when('/login', {
             templateUrl: 'partials/account/login.html',
             controller: 'AccountController'
         }).
         when('/logoff', {
             templateUrl: 'partials/account/logoff.html',
             controller: 'AccountController'
         }).
         when('/contact', {
             templateUrl: 'partials/contact/contact.html',
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
   }]);

phonecatApp.run(['$rootScope', '$location', '$cookieStore', '$http',
   function ($rootScope, $location, $cookieStore, $http) {
       // keep user logged in after page refresh
       $rootScope.globals = $cookieStore.get('globals') || {};
       if ($rootScope.globals.currentUser) {
           $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
       }
       $rootScope.$on('$locationChangeStart', function (event, next, current) {
           // redirect to login page if not logged in
           if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
               $location.path('/login');
           }
       });
   }]);