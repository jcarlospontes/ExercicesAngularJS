angular.module("catalogoRegistros").factory("errorInterceptor", function ($q, $location){
    return{
        responseError: function (rejection){
            if(rejection.status === 404){
                $location.path("/error");
                console.log("Handling 404 error...");
            }
            return $q.reject(rejection);
        }
    };
});