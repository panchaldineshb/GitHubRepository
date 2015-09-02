'use strict';
angular
    .module('AppServices')
    .constant('API_KEY', 'b157d375adeb7860d2574fc3587e23e6')
    .constant('BASE_URL', 'http://api.themoviedb.org/3')
    .constant('RUTAIMAGENAPI', 'http://image.tmdb.org/t/p/w')
    .factory('MovieService', dataService);


function dataService($http, API_KEY, BASE_URL, RUTAIMAGENAPI, $log) {

        var data = {
            'search': search,
            'getPopular': getPopular,
            'rutaImagen' : rutaImagen
        };

    function rutaImagen(tamanyo, ruta) {

        return ruta == null ? null : RUTAIMAGENAPI + tamanyo + ruta;

    }


    function search(query) {
        return doRequest('search/tv', {query: query}).then(function(data) {
            return data.results;
        });
    }

    function getPopular() {
        return doRequest('tv/popular', {}).then(function(data) {
            console.log(data);
            return data.results;
        });
    }

    function getGenreTvList() {
        return doRequest('/genre/tv/list', {}).then(function(data) {
            return data.results;
        });
    }

    function getGenreIdMovies(idMovie) {
        return doRequest('/genre/' + idMovie + 'movies', {include_all_movies:true}).then(function(data) {
            return data.results;
        });
    }




    //Este método construye la url necesaria para hacer la petición por ejemplo http://api.themoviedb.org/3/search/tv?api_key=b157d375adeb7860d2574fc3587e23e6&param1=value1&param2=etc
    //Una vez construida la url realiza la petición y devuelve el objeto data de la repsuesta.
    function doRequest(url, params) {
        var requestUrl = BASE_URL + '/' + url + '?api_key=' + API_KEY;
        angular.forEach(params, function(value, key) {
            requestUrl = requestUrl + '&' + key + '=' + value;
        });

        return $http({
            'url': requestUrl,
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            },
            'cache': true
        }).then(function(response){
            return response.data;
        });

    }




        return data;

};

