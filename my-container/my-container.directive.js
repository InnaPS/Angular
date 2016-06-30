angular
    .module('myContainer')
    .directive('myContainer', function () {
        return {
            restrict: 'EA',
            templateUrl:  'my-container/my-container.template.html',
            controller: function($scope) {
                $scope.items = [
                    {
                        key: 'aaa',
                        name: 'bbb'
                    },  {
                        key: 'aaa1',
                        name: 'bbb1'
                    },  {
                        key: 'aaa2',
                        name: 'bbb2'
                    },
                    {
                        key: 'aaa3',
                        name: 'bbb3'
                    }
                ];
                $scope.status = false;
                $scope.openPopup = function(msg) {
                    $scope.status = msg;
                };
                $scope.closePopup = function() {
                    $scope.status = false;
                };
            }

        }
    });
