angular.module("catalogoRegistros").controller("registroController", function($scope, registros, serialGenerator, operadoras){
    $scope.operadoras = operadoras.data;

    $scope.titulo = "Registro de funcionários"
    $scope.registros = registros.data;
    $scope.apertou = false;
    $scope.operadoras = operadoras.data;

    var init = function (){
        calcularImpostos($scope.registros);
        generateSerial($scope.registros);
    };

    var calcularImpostos = function (registros){
        registros.forEach(function (registro){
            registro.operadora.precoComImposto = calcularImposto(registro.operadora.preco);
        });
    };
    var generateSerial = function (registros){
      registros.forEach(function (item){
          item.serial = serialGenerator.generate();
      });
    };

    $scope.adicionarRegistro = function (registro) {
        registro.serial = serialGenerator.generate();
        registrosAPI.saveRegistros(registro).success(function (data) {
            delete $scope.registro;
            $scope.registrosForm.$setPristine();
            carregarRegistros();
        });
    };

    $scope.removerRegistros = function (registros) {
        $scope.registros = registros.filter(function (registro) {
            if (!registro.selecionado) return registro;
        });
        $scope.verificarRegistroSelecinado($scope.registros);
    };

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


    $scope.verificarRegistroSelecinado = function (registros){
        $scope.hasRegistroSelecionado = registros.some(function (registro){
            return registro.selecionado;
        });
    };


    $scope.ordenarPor = function(campo){
        $scope.ordenacao = campo;
        $scope.valordem = !$scope.valordem;
    }

    var calcularImposto = function (preco){
        var imposto = 1.2;
        return preco * imposto;
    };


    init();

});