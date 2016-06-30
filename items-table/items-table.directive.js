'use strict';

angular.
    module('itemsTable')
    .directive('itemsTable', function() {
        return {
            restrict: 'EA',
            templateUrl: 'items-table/items-table.template.html',
            controller: function MyController($scope) {
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
            }
        }
    });
