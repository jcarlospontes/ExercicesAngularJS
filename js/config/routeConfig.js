angular.module("catalogoRegistros").config(function ($routeProvider){
    $routeProvider.when("/registros",{
        templateUrl: "view/registros.html",
        controller: "registroController",
        resolve: {
            operadoras: function (operadorasAPI, $location){
                return operadorasAPI.getOperadoras().catch(function() {
                    $location.path('/error');
                });
            },
            registros: function (registrosAPI){
                return registrosAPI.getRegistros().catch(function() {
                    $location.path('/error');
                });
            }
        }
    });
    $routeProvider.when("/novoRegistro",{
        templateUrl: "view/novoRegistro.html",
        controller: "novoRegistroCtrl",
        resolve: {
            operadoras: function (operadorasAPI){
                return operadorasAPI.getOperadoras();
            }
        }
    });

    $routeProvider.when("/detalhesRegistro/:id",{
        templateUrl: "view/detalhesRegistro.html",
        controller: "detalhesRegistroCtrl",
        resolve: {
            registro: function (registrosAPI, $route){
                return registrosAPI.getRegistro($route.current.params.id);
            }
        }
    });

    $routeProvider.when("/error",{
        templateUrl: "view/error.html",
    });

    $routeProvider.otherwise({redirectTo: "/registros"});
});