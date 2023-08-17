angular.module("catalogoRegistros").factory("registrosAPI", function($http, config){
    var _getRegistros = function () {
        return $http.get(config.baseURL + "/registros");
    };

    var _getRegistro = function (id) {
        return $http.get(config.baseURL + "/registros/" + id);
    };

    var _saveRegistros = function (registro) {
        return $http.post(config.baseURL + "/registros", registro);
    };

    return {
        getRegistros: _getRegistros,
        getRegistro: _getRegistro,
        saveRegistros: _saveRegistros
    };
});