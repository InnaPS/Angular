angular.
    module('myApp').
    component('popupButton', {
        bindings: {
            onClick: '&'
        },
        template:
        '<div>' +
            '<a class="button" href="#" ng-click="ctrl.openPopup">Pop up</a>' +
        '</div>',
        controller: ['$scope', function MyController($scope) {
            var self = this;
            //$ctrl = this;
            /*self.openPopup = function openPopup() {
                //console.log(self.parent.status);
                //self.parent.status = true;
            };*/
        }]
    });