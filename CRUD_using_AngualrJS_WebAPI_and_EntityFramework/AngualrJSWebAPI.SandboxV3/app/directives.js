'use strict';

app.directive('appheader', [function() {

    return {
        restrict: "E", // E elemento, A atribute, EA elemento o atributo
        replace: true,
        templateUrl: "app/shared/header.html"
    };

}]);


app.directive('appfooter', [function() {

    return {
        restrict: "E", // E elemento, A atribute, EA elemento o atributo
        replace: true,
        templateUrl: "app/shared/footer.html"
    };

}]);

//<pelicula titulo="" fecha="" imagenUrl=""></pelicula>
app.directive('pelicula',
    ["MovieService", function(MovieService){

        return {
            restrict: "E",
            replace: true,
            templateUrl: 'app/components/movies/views/pelicula.tpl.html',

            scope: {

                titulo: '@',
                fecha: '@',
                //imagenUrl: '&',
                rutapeli: '='

            },

            /*link: function(scope, element, attributes) {

                scope.rutaImagen = function (ruta) {
                    var url =attributes.imagenurl;
                    return MovieService.rutaImagen(45, url);


                };
            }*/

            link: function(scope) {

                scope.rutaImagen = function (ruta) {


                    return MovieService.rutaImagen(45, ruta);


                };
            }
        }

   }
]);

