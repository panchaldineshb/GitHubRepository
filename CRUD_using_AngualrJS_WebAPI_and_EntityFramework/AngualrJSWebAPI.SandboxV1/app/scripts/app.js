'use strict';

/**
 * @ngdoc overview
 * @name angularjsDashboardApp
 * @description
 * # angularjsDashboardApp
 *
 * Main module of the application.
 */
var app = angular.module('angularjsDashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/main.html',
          controller: 'DashboardCtrl'
      })
      .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
      })
      .otherwise({
          redirectTo: '/'
      });

    //push state remove #
    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode(true);
    }
});