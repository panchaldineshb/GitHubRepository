'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'ngResource',
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