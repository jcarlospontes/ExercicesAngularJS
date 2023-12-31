angular.module("ui", []);

//$templateCache.put("view/accordion.html", "");
//<div  className="ui-accordion-title" ng-click="open()">{{title}}</div>
//<div  className="ui-accordion-content" ng-transclude ng-show="isOpened"></div>
angular.module("ui").run(function ($templateCache){
    $templateCache.put("view/accordion.html", '<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>');
});

angular.module("ui").directive("uiAccordions", function (){
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


angular.module("ui").directive("uiAccordion", function (){
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