'use strict';

/*angular.
    module('itemsTable').
    component('itemsTable', {
        templateUrl: 'items-table/items-table.template.html',
        controller: function MyController() {
            this.items = [
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
});*/


angular.
    module('myApp').
    component('itemsTable', {
        template:
        '<table class="content">' +
        '<colgroup span="1"></colgroup>' +
        '<colgroup class="second" span="1"></colgroup>' +
        '<colgroup class="third" span="1"></colgroup>' +
        '<thead>' +
        '<th>#</th>' +
        '<th>Key</th>' +
        '<th>Value</th>' +
        '<th></th>' +
        '</thead>' +
        '<tbody>' +
            '<tr ng-repeat="obj in $ctrl.items">' +
                '<td>1</td>' +
                '<td title="{{ obj.key }}">{{ obj.key }}</td>' +
                '<td title="{{ obj.name }}">{{ obj.name }}</td>' +
                '<td>x</td>' +
            '</tr>' +
            '<tr>' +
                '<td>+</td>' +
                '<td></td>' +
                '<td></td>' +
                '<td></td>' +
            '</tr>'+
        '</tbody>' +
        '</table>',
        controller: function MyController() {
            this.items = [
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
    });


