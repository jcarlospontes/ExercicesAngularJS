angular.module("catalogoRegistros").controller("novoRegistroCtrl", function($scope, operadorasAPI, registrosAPI, serialGenerator, $location, operadoras){

    $scope.operadoras = operadoras.data;

    $scope.adicionarRegistro = function(registro) {
        if(!$scope.registroForm.$invalid){
            $scope.apertou = false;
            registro.serial = serialGenerator.generate();
            registro.cor = "red";
            registro.data = new Date();
            registrosAPI.saveRegistros(registro).then(function(data){
                delete $scope.registro;
                $scope.registroForm.$setPristine();
                $location.path("/registros");

            });
        }
        else{
            $scope.apertou = true;
        }
    };
});