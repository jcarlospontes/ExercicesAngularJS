angular.module("catalogoRegistros").factory("registrosAPI", function($http, config){
    var _getRegistros = function () {
        return $http.get(config.baseURL + "/registros");
    };

    var _saveRegistros = function (registro) {
        return $http.post(config.baseURL + "/registros", registro);
    };

    return {
        getRegistros: _getRegistros,
        saveRegistros: _saveRegistros
    };
});