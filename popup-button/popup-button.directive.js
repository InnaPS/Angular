angular
    .module('popupButton')
    .directive('popupButton', function() {
        return {
            restrict: 'EA',
            scope: {
                openPopup: '&'
            },
            templateUrl: 'popup-button/popup-button.template.html',
            controller: ['$scope', function ($scope) {

            }],
            replace: true,
            link: function(scope, elm, attrs) {
                scope.callOpen = function() {
                    scope.openPopup()(true);
                }
            }
        }
    });
