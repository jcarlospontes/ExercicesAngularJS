angular.module("catalogoRegistros").directive("uiTelefone", function ($filter) {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatTelefone = function (telefone) {
                telefone = telefone.replace(/[^0-9]+/g, "");
                if(telefone.length > 2) {
                    telefone = telefone.substring(0,2) + ")" + telefone.substring(2);
                    telefone = "(" + telefone;
                }
                if(telefone.length > 3){
                    telefone = telefone.substring(0,4) + " " + telefone.substring(4);
                }

                if(telefone.length > 9){
                    telefone = telefone.substring(0,9) + "-" + telefone.substring(9);
                }
                if(telefone.length > 14){
                    if(telefone[9] === "-"){
                        telefone = telefone.replace("-","");
                        telefone = telefone.substring(0,6) + " " + telefone.substring(6,14);
                    }
                    telefone = telefone.substring(0,11) + "-" + telefone.substring(11,15);
                }
                return telefone;
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatTelefone(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    };
});