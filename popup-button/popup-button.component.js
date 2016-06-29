angular.
    module('popupButton')
    .directive('popupButton', function() {
        return {
            restrict: 'EA',
            template:
            '<div>' +
                '<a class="button" href="#" ">Pop up</a>' +
            '</div>',
            controller: ['$scope', function MyController($scope) {
                var self = this;
                //$ctrl = this;
                /*self.openPopup = function openPopup() {
                 //console.log(self.parent.status);
                 //self.parent.status = true;
                 };*/
            }]
        }
    });