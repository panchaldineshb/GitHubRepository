angular.module('AppServices').service('UsersService', function() {

    var self = this;

    self.users = [
        {
            "id": 1,
            "nombre": "jose",
            "telefono": 222,
            "activo": true
        },

        {
            "id": 2,
            "nombre": "dani",
            "telefono": 333,
            "activo": true
        },

        {
            "id": 3,
            "nombre": "juan",
            "telefono": 999,
            "activo": true
        },

        {
            "id": 4,
            "nombre": "juan gan",
            "telefono": 66699,
            "activo": true
        },

        {
            "id": 5,
            "nombre": "Xisco sala",
            "telefono": 4578,
            "activo": true
        },
    ];


    self.getUsers = function() {
        return self.users;
    };

    self.addUser = function (user) {
        self.getUsers().push(user);  //equivalente a self.users.push(user);
    };

    self.deleteUser = function (index) {
        self.getUsers().splice(index, 1);
    };

    self.updateUser = function(index, newUserValue) {
        self.getUsers()[index] = newUserValue;
    };
});