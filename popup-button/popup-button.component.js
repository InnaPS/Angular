angular
    .module('popupButton')
    .directive('popupButton', function() {
        return {
            restrict: 'EA',
            templateUrl: 'popup-button/popup-button.template.html',
            controller: ['$scope', function ($scope) {
                var self = this;
                //$ctrl = this;
                /*self.openPopup = function openPopup() {
                 //console.log(self.parent.status);
                 //self.parent.status = true;
                 };*/
            }]
        }
    });