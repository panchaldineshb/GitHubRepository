'use strict';

/**
 * @ngdoc overview
 * @name myAngularAppApp
 * @description
 * # myAngularAppApp
 *
 * Main module of the application.
 */
var SarabiAngularApp = angular.module('SarabiAngularApp', ['ngGrid', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch'])
.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    $httpProvider.defaults.timeout = 5000;
    $locationProvider.html5Mode(true);
}]);