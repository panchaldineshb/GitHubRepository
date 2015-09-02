'use strict';

angular.module('AppCore').directive('appmenu', [function() {

    return {
        restrict: "E", // E elemento, A atribute, EA elemento o atributo
        replace: true,
        templateUrl: "app/components/menu/menu.view.html"
    };

}]);