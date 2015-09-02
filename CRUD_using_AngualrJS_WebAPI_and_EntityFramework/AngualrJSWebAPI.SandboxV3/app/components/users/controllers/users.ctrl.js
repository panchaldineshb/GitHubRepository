'use strict';
angular.module('AppCore').controller('UsersController', ['UsersService', function(usersService) {

    var self = this;

    self.texto = 'Prueba texto UsersController';


    console.log("desde controladorUsuarios " + this);
    //VARIABLES PARA LA VISTA

    self.usuario = {};
    self.isDisabled = false;

    self.arrUsuarios = usersService.getUsers();

    //FUNCIONES

    self.guardar = function() {
        //alert(typeof self.usuario.id);
        if(typeof( self.usuario.id ) == "number" ){
            usersService.addUser(self.usuario);
        };
        self.usuario = {};
    };

    self.seleccionar = function(id) {
        self.isDisabled = true;
        for (var i=0; i < self.arrUsuarios.length; i++) if (self.arrUsuarios[i].id == id) {
            self.usuario = self.arrUsuarios[i];
        }

    };



    self.eliminar = function() {

        var index = self.arrUsuarios.indexOf(self.usuario);
        if(index >= 0) {
            usersService.deleteUser(index);
        };
        self.usuario = {};
        self.isDisabled = false;

    };

    self.modificar = function() {
        var index = self.arrUsuarios.indexOf(self.usuario);
        if(index >= 0) {
            usersService.updateUser(index, self.usuario);
        };
        self.usuario = {};
        self.isDisabled = false;
    };



    self.saludar = function(texto) {
        return "Hola " + texto;
    };


}]);