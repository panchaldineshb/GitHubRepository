'use strict';

angular.module('AppCore').controller('MenuController', ["$location", "textoHome", "textoObjeto", function($location, textoHome, textoObjeto) {
    var nav = this;
    //debugger;
    nav.textoConstante = textoObjeto.texto1;

    //VARIABLES PARA LA VISTA

    nav.usuario = {};
    nav.isDisabled = false;


    nav.estoyEn = function(){
        return $location.path();
    }



}]);



