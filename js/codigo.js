angular.module("catalogoRegistros").controller("registroController", function($scope, $http){
    $scope.var = "Registro"
    $scope.registros = [];

    $scope.operadoras = [];

    var carregarRegistros = function (){
        $http.get("http://localhost:3412/registros").then(function(response){
            $scope.registros = response.data;
        });
    };

    var carregarOperadoras = function (){
        $http.get("http://localhost:3412/operadoras").then(function(response){
            $scope.operadoras = response.data;
        });
    };

    $scope.adicionarRegistro = function(registro) {
        registro.cor = "red";
        registro.data = new Date();
        $http.post("http://localhost:3412/registros", registro).then(function(data){
            delete $scope.registro;
            $scope.registroForm.$setPristine();
            carregarRegistros();

        });
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
    carregarOperadoras();


    $scope.classe1 = "negrito";
    $scope.classe2 = "selecionado";
    $scope.validname = false;
    $scope.validtel = false;
    $scope.valordem = true;
});