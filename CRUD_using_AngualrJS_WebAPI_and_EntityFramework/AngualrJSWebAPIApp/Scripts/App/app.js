'use strict';

/**
 * @ngdoc overview
 * @name myAngularAppApp
 * @description
 * # myAngularAppApp
 *
 * Main module of the application.
 */
var SarabiAngularApp = angular.module('SarabiAngularApp', ['ngGrid', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']);

SarabiAngularApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
       .when('/Organization', { templateUrl: '/Organization/Index', controller: 'organizationController' })
       .when('/Organization/Register', { templateUrl: '/Organization/Register', controller: 'organizationController' })
       .when('/Home', { templateUrl: '/Home/Index', controller: 'userController' })
       .when('/', { templateUrl: '/', controller: 'userController' })
       .otherwise({
           redirectTo: '/Home'
       });

    //enable html5 routes
    $locationProvider.html5Mode(true).hashPrefix('!');
}]);