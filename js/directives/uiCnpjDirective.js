angular.module("catalogoRegistros").directive("uiCnpj", function ($filter) {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatCnpj = function (cnpj) {
                cnpj = cnpj.replace(/[^0-9]+/g, "");
                if(cnpj.length > 13) {
                    cnpj = cnpj.substring(0,2) + "." + cnpj.substring(2, 5) + "." + cnpj.substring(5, 8) + "/" + cnpj.substring(8, 12) + "-" + cnpj.substring(12, 14);
                }
                return cnpj;
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatCnpj(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    };
});