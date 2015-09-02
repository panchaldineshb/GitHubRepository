'use strict';
angular.module('AppCore').controller('ListUsersController', ['UsersService', function(usersService) {

    var self = this;

    self.texto = 'Prueba texto ListUsersController';



    self.arrUsuarios = usersService.getUsers();

}]);