angular
    .module('popupWindow')
    .directive('popupWindow', ['popupWindowService', function(popupWindowService) {
        return {
            restrict: 'EA',
            transclude: true,
            //scope: true,
            templateUrl: 'popup-window/popup-window.template.html',
            controller: ['$scope', function ($scope, $element, $transclude) {
                $scope.status = false;
                $scope.closeModalWindow = function() {
                    $scope.status = popupWindowService.closePopupWindow($scope.status);

                };

            }]
        }
    }]);
