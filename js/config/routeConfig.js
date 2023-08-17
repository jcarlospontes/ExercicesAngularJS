angular.module("catalogoRegistros").config(function ($routeProvider){
    $routeProvider.when("/registros",{
        templateUrl: "view/registros.html",
        controller: "registroController",
        resolve: {
            operadoras: function (operadorasAPI){
                return operadorasAPI.getOperadoras();
            },
            registros: function (registrosAPI){
                return registrosAPI.getRegistros();
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

    $routeProvider.otherwise({redirectTo: "/registros"});
});