angular.module("catalogoRegistros").controller("detalhesRegistroCtrl", function($scope, $routeParams, registro){
    $scope.registro = registro.data;
});