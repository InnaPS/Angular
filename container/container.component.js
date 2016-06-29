angular.
    module('myApp').
    component('myContainer', {

        controller: ['$scope', function MyController($scope) {
            /*var containerCtrl = this;
            containerCtrl.status = {
                value: true
            };*/
            $scope.flag = true;
            /*containerCtrl.openPopup = function openPopup() {
                containerCtrl.status = true;
                console.log(containerCtrl.status);
            };*/
            console.log( $scope.flag);
        }]
    });