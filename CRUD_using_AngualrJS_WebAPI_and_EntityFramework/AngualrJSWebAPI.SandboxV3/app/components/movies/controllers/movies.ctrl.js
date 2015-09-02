"use strict";
angular.module('AppCore')
    .controller('MovieSearchCtrl', [ '$scope', '$location', '$routeParams', 'MovieService',
        function($scope, $location, $routeParams, movieService) {


        $scope.$watch('movieSearchCtrl.query', function(newValue, oldValue) {
            if (newValue.length > 3) {
                movieService.search(newValue).then(function(response) {
                    self.searchResults = response;
                });
            }
        });

        var self = this;
        self.query = "";
        self.searchResults = "";
        self.jsonPopular;

        self.getPopular = function() {

            movieService.getPopular().then(function(response) {
                console.log(response);
                self.jsonPopular = response;
            });
        };








        }]);