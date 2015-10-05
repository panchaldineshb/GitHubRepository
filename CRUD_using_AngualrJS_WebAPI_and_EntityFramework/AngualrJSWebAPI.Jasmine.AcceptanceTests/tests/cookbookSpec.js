/*
Referenced : https://github.com/hillkim7/angularjs_tutorial

*/

describe('MainCtrl', function () {
    var mainCtrl, $scope;
    beforeEach(module('cookbook'));
    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller('MainCtrl', {
            $scope: $scope
        });
    }));
    it('should assign the correct rapper to scope', function () {
        expect($scope.emcee).toEqual('Kool G Rap');
    });
});