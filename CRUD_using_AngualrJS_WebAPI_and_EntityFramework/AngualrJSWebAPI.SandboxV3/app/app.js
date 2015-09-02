
var app = angular.module('appAngular', ['ngRoute', 'AppServices', 'AppCore']);

//Datos accesibles antes de carga la aplicación. Util para cargar datos de conexion entre servicios, bases de datos etc.
app.constant({
    "APIKEY": "dsafdasd3rer34345",
    "bbdd": {
        "url": "fulanito",
        "user": "secreta"
    }
});

//Datos accesibles una vez cargada la aplicación
app.value({
    "textoHome": "Texto de prueba desde constante 2",
    "textoObjeto": {
        "texto1": "prueba texto 1b",
        "texto2": "prueba texto 2"
    }
});
