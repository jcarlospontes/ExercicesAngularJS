angular.module("catalogoRegistros").directive("uiAccordions", function (){
    return{
        controller: function($scope, $element, $attrs){
            var accordions = [];
            this.registerAccordion = function (accordion){
                accordions.push(accordion);
            };
            this.closeAll = function (){
                accordions.forEach(function (accordion){
                   accordion.isOpened = false;
                });
            }
        }
    };
});


angular.module("catalogoRegistros").directive("uiAccordion", function (){
   return{
       templateUrl: "view/accordion.html",
       scope: {
           title: "@"
       },
       transclude:true,
       require: "^uiAccordions",
       link: function(scope, element, attrs, ctrl){
           ctrl.registerAccordion(scope);
           scope.open = function(){
                ctrl.closeAll();
                scope.isOpened=true;
           };
       }
   };
});