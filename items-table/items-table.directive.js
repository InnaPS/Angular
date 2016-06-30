'use strict';

angular.
    module('itemsTable')
    .directive('itemsTable', function() {
        return {
            restrict: 'EA',
            templateUrl: 'items-table/items-table.template.html',
            controller: function MyController($scope) {

            }
        }
    });
