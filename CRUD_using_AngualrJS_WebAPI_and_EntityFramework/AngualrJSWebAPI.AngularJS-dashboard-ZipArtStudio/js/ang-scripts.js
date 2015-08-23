// JavaScript Document

// create the module and name it scotchApp
var dashboardApp = angular.module('dashboardApp', ['ngRoute', 'phonecatFilters', 'phonecatServices', 'ngSanitize', 'mgcrea.ngStrap']);

// configure our routes
dashboardApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        .when('/applications', {
            templateUrl: 'pages/application.html',
            controller: 'ApplicationListCtrl'
        })

        .when('/users', {
            templateUrl: 'pages/users.html',
            controller: 'UserListCtrl'
        })

        .when('/about/:phoneId', {
            templateUrl: 'pages/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        })

        .when('/charts', {
            templateUrl: 'pages/charts.html',
            controller: 'chartsController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});