angular
    .module('myContainer')
    .directive('myContainer', function () {
        return {
            restrict: 'EA',
            templateUrl:  'my-container/my-container.template.html',
            templateNamespace: 'svg',
            controller: function($scope, $http) {
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
                //$scope.status = false;
                $scope.openPopup = function(msg, data) {
                    $scope.status = msg;
                    $scope.popupData = data;
                    console.log($scope.popupData);
                };
                /*$scope.closePopup = function() {
                    $scope.status = false;
                };*/
                /*$http.get("graphs.json").then(function(response){
                    $scope.graphs = response.data.graphObjs;
                    console.log($scope.graphs);
                });*/
                $scope.graphs = {
                    "001": {
                        "links":[
                            "003",
                            "004",
                            "007"
                        ],
                        "color":"#a4f1ec"
                    },
                    "002": {
                        "links":[
                            "003",
                            "005"
                        ],
                        "color":"green"
                    },
                    "003": {
                        "links":[
                            "001",
                            "002",
                            "006",
                            "007"
                        ],
                        "color":"red"
                    },
                    "004": {
                        "links":[
                            "001"
                        ],
                        "color":"brown"
                    },
                    "005": {
                        "links":[
                            "002",
                            "007"
                        ],
                        "color":"teal"
                    },
                    "006": {
                        "links":[
                            "003",
                            "007"
                        ],
                        "color":"pink"
                    },
                    "007": {
                        "links":[
                            "001",
                            "003",
                            "005",
                            "006"
                        ],
                        "color":"coral"
                    }
                };
                $scope.dimensions = {
                    clientWidth: document.documentElement.clientWidth,
                    clientHeight: document.documentElement.clientHeight
                };
                $scope.getDimensions = function() {
                    return {
                        clientWidth: document.documentElement.clientWidth,
                        clientHeight: document.documentElement.clientHeight
                    };
                };

            },
            link: function(scope, element, attrs) {
                scope.renderLinks = function (obj){
                    var area = angular.element( document.querySelector("svg") );
                    var namespace = "http://www.w3.org/2000/svg";
                    var id = obj.target.attributes.data.value;

                    var graphLinks = $scope.graphs[id].links;
                    for (var i = 0; i < graphLinks.length; i++) {

                        var name = "circle";
                        var svg_element = document.createElementNS(namespace, name);
                        var attributes = {
                            cx: $scope.graphs[graphLinks[i]].links.length * 30 * 2 + i * 30,
                            cy: $scope.graphs[graphLinks[i]].links.length * 30 * 2 + i * 30,
                            r: $scope.graphs[graphLinks[i]].links.length * 30,
                            fill: $scope.graphs[graphLinks[i]].color};
                        for (var attr in attributes)
                            svg_element.setAttribute(attr, attributes[attr])
                        area.append(svg_element);
                    }



                };
            }
        }
    });
