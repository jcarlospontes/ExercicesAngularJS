angular.module("catalogoRegistros").directive("uiCpf", function ($filter) {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatCpf = function (cpf) {
                cpf = cpf.replace(/[^0-9]+/g, "");
                if(cpf.length > 10) {
                    cpf = cpf.substring(0,3) + "." + cpf.substring(3, 6) + "." + cpf.substring(6, 9) + "-" + cpf.substring(9, 11) ;
                }
                return cpf;
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatCpf(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    };
});