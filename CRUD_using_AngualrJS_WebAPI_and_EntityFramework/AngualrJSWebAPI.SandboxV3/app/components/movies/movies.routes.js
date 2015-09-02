'use strict';

angular.module('AppCore').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/movies/popular', {
                templateUrl: 'app/components/movies/views/populars.view.html',
                controller: 'MovieSearchCtrl',
                controllerAs: "movieSearchCtrl"
            })


    }
]);