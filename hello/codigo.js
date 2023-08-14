var app = angular.module('helloWorld', []);
app.controller('helloWorldCtrl', function($scope) {
    $scope.message = "Hello, World!";
});