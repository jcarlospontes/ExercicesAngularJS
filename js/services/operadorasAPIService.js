angular.module("catalogoRegistros").service("operadorasAPI", function($http, config){
    this.getOperadoras = function () {
        return $http.get(config.baseURL + "/operadoras")
    }
});