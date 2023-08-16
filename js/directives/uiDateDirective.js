angular.module("catalogoRegistros").directive("uiDate", function (){
    return{
        link: function (scope, element, attrs){
            console.log(element);
        }
    };
});