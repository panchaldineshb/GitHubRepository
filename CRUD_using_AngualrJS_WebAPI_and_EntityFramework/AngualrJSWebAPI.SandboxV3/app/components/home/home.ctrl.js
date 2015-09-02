'use strict';
angular.module('AppCore').controller('HomeController', function($scope, Map) {

    var self = this;

    self.texto = 'Prueba texto';
    $scope.map = Map.create({
        id: 'map',
        zoom: 10,
        center: {
            lon: -63,
            lat: -8
        }
    });

});