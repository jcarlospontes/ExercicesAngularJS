angular.module("catalogoRegistros").controller("registroController", function($scope, registrosAPI, serialGenerator, operadoras){
    $scope.operadoras = operadoras.data;

    $scope.titulo = "Registro de funcionários"
    $scope.registros = [];
    $scope.apertou = false;

    $scope.operadoras = [];

    var carregarRegistros = function (){
        registrosAPI.getRegistros().then(function(response){
            $scope.registros = response.data;
        }).catch(function (erro){
            $scope.error = "Erro ao tentar acessar os registros";
        });
    };

    $scope.adicionarRegistro = function(registro) {
        if(!$scope.registroForm.$invalid){
            $scope.apertou = false;
            registro.serial = serialGenerator.generate();
            registro.cor = "red";
            registro.data = new Date();
            registrosAPI.saveRegistros(registro).then(function(data){
                delete $scope.registro;
                $scope.registroForm.$setPristine();
                carregarRegistros();

            });
        }
        else{
            $scope.apertou = true;
        }
    };

    $scope.removerRegistro = function(registros){
        $scope.registros = registros.filter(function (registro){
           if(!registro.selecionado) return registro;
        });
    }

    $scope.getCor = function(registro){
        if(registro.status){
            return "blue";
        }
        else{
            return "red";
        }
    }

    $scope.desativarStatus = function(registros){
        $scope.registros.filter(function (registro){
            if(registro.selecionado) return registro.status = false;
        });
    }

    $scope.ativarStatus = function(registros){
        $scope.registros.filter(function (registro){
            if(registro.selecionado) return registro.status = true;
        });
    }

    $scope.registroSelecionado = function(registros){
        return registros.some(function (registro){
           return registro.selecionado;
        });
    }


    $scope.ordenarPor = function(campo){
        $scope.ordenacao = campo;
        $scope.valordem = !$scope.valordem;
    }

    carregarRegistros();


    $scope.classe1 = "negrito";
    $scope.classe2 = "selecionado";
    $scope.validname = false;
    $scope.validtel = false;
    $scope.valordem = true;
});