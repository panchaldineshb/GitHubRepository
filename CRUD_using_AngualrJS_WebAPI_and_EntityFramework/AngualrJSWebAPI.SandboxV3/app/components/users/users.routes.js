'use strict';

angular.module('AppCore').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/users', {
                templateUrl: 'app/components/users/views/users.view.html',
                controller: 'ListUsersController',
                controllerAs: "listUsersCtrl"
            })
            .when('/edit-users', {
                templateUrl: 'app/components/users/views/edit-users.view.html',
                controller: 'UsersController',
                controllerAs: "usersCtrl"
            })

    }
]);