angular.module("catalogoRegistros").factory("errorInterceptor", function ($q, $location){
    return {
        responseError: function (rejection) {
            if (rejection.status === 404 || rejection.status === 503 || rejection.status === 504) {
                $location.path("/error");
            }
            return $q.reject(rejection);
        }
    };
});