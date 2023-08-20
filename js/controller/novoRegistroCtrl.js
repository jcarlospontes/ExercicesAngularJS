angular.module("catalogoRegistros").controller("novoRegistroCtrl", function($scope, operadoras, registrosAPI, serialGenerator, $location, imagemService){

    $scope.operadoras = operadoras.data;
    $scope.apertou = false;
    $scope.titulo = "Registrando";
    $scope.showImage = imagemService.getImageStatus();

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