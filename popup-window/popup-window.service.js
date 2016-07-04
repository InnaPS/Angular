angular
    .module('popupWindow')
    .service('popupWindowService', function() {
        this.isOpen = true;
        this.closePopupWindow = function (status) {
            status = false;
            return status;
        };
    });