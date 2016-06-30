angular
    .module('myContainer')
    .directive('myContainer', function () {
        return {
            restrict: 'EA',
            templateUrl:  'container/my-container.html',
            controller: function($scope) {
                $scope.status = false;
                $scope.openPopup = function() {
                    $scope.status = true;
                };
                $scope.closePopup = function() {
                    $scope.status = false;
                };
            }

        }
    });
