"use strict";

(function() {
    describe("LoginCtrl Test Block", function() {
        var scope, controller;
        beforeEach(function() {
            module("bookArenaApp");

            inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                controller = $controller("LoginCtrl", { $scope: scope });
            });
        });

        it("should define a controller named LoginCtrl", function () {
            expect(controller).toBeDefined();
        });

        it("should define a category collection", function() {
            expect(scope.categories).toBeDefined();
        });
    });
})();