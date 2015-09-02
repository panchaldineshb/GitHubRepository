'use strict';

angular.module('AppCore').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/components/home/home.view.html',
                //template: "<h1>lo manda homeModule.config</h1>", Evidentemente hay que utilizar templageUrl.
                controller: 'HomeController',
                controllerAs: "homeCtrl"
            })

    }
]);