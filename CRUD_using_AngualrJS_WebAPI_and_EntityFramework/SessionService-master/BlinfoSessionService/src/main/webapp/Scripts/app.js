/* global angular */
var gUrl = "localhost:8084/BlinfoSessionService/resources";
//var gUrl = "apiproxy.blinfo.se";
var sessionserviceapp = angular.module('sessionserviceapp', 
['ngCookies', 'ngRoute', 'angularUtils.directives.dirPagination','loginManager','ngResource']);
sessionserviceapp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    controller: 'LoginController',
                    templateUrl: 'Partials/login.html'
                })
                .when('/main', {
                    controller: 'sessionCtrl',
                    templateUrl: 'Partials/main.html'
                })
                .when('/login', {
                    controller: 'LoginController',
                    templateUrl: 'Partials/login.html'
                })

                .otherwise({redirectTo: '/login.html'});
    }]);
