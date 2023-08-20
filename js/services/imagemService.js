angular.module('catalogoRegistros').factory('imagemService', function() {

    var imageStatus = false;

    var _getImage = function (){
        return imageStatus = !imageStatus;
    };

    var _getImageStatus = function (){
        return imageStatus;
    };

    return {
        getImage: _getImage,
        getImageStatus: _getImageStatus
    };
});