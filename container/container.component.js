angular.
    module('myApp').
    component('myContainer', {
        bindings: {
            openPopup: '&'
        },
        controller: ['$scope', function MyController($scope) {
            var containerCtrl = this;
            containerCtrl.status = false;
            containerCtrl.openPopup = function openPopup() {
                containerCtrl.status = true;
                console.log(containerCtrl.status);
            };
        }]
    });