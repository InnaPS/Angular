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
                $scope.graphs = [
                    {
                        "id":"001",
                        "links":[
                            "003",
                            "004",
                            "007"
                        ],
                        "color":"yellow"
                    },
                    {
                        "id":"002",
                        "links":[
                            "003",
                            "005"
                        ],
                        "color":"green"
                    },
                    {
                        "id":"003",
                        "links":[
                            "001",
                            "002",
                            "006",
                            "007"
                        ],
                        "color":"red"
                    },
                    {
                        "id":"004",
                        "links":[
                            "001"
                        ],
                        "color":"blue"
                    },
                    {
                        "id":"005",
                        "links":[
                            "002",
                            "007"
                        ],
                        "color":"teal"
                    },
                    {
                        "id":"006",
                        "links":[
                            "003",
                            "007"
                        ],
                        "color":"pink"
                    },
                    {
                        "id":"007",
                        "links":[
                            "001",
                            "003",
                            "005",
                            "006"
                        ],
                        "color":"coral"
                    }
                ];
            },
            link: function(scope, element, attr)
            {
                scope.add_circle = function (){
                    var area = angular.element( document.querySelector("#draw_area") );
                    var namespace = "http://www.w3.org/2000/svg";
                    var name = "circle";
                    var attributes = {cx: 50, cy:50, r: $scope.graphs[0].links.length * 30, fill: 'red'};
                    var svg_element = document.createElementNS(namespace, name);
                    for (var attr in attributes)
                        svg_element.setAttribute(attr, attributes[attr])
                    area.append(svg_element);
                    alert("Circle appended!")
                };
            }

        }
    });
