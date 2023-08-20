angular.module("catalogoRegistros").controller("registroController", function($scope, registros, serialGenerator, operadoras, imagemService){

    $scope.titulo = "Catalogo de Registros"
    $scope.operadoras = operadoras.data;
    $scope.registros = registros.data;
    $scope.showImage = imagemService.getImageStatus();

    var init = function (){
        calcularImpostos($scope.registros);
        generateSerial($scope.registros);
    };

    $scope.reset = function (){
      $scope.registros = angular.copy($scope.registros);
      $scope.busca = "";
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
            return "#37d00e";
        }
        else{
            return "#FF0000";
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
        $scope.hasRegistroSelecionado = registros.some(function (registro) {
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

    $scope.clickImage = function (){
        imagemService.getImage();
        $scope.showImage = imagemService.getImageStatus();
    }


    init();

});