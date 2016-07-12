angular
    .module('myContainer')
    .directive('myContainer', function () {
        return {
            restrict: 'EA',
            templateUrl:  'my-container/my-container.template.html',
            templateNamespace: 'svg',
            controller: function($scope, $http, $timeout) {
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
                $scope.openPopup = function(msg, dblClickEvent) {
                    $scope.status = msg;
                    $scope.graphId = dblClickEvent.target.attributes.data.value;
                    console.log($scope.graphId);
                };
                $scope.getGraphId = function(sglClickEvent) {
                    var id = sglClickEvent ? sglClickEvent.target.attributes.data.value : '001';
                    return id;
                };
                $scope.renderLinks = function (id){
                    var id = id ? id : '001';
                    var graphLinks = $scope.graphs[id].links;
                    //console.log(graphLinks);
                    $scope.linksArray = [];
                    $scope.linksArray.push({
                        data: id,
                        cx: $scope.dimensions.clientWidth / 2,
                        cy: $scope.dimensions.clientHeight / 2,
                        r: $scope.graphs[id].links.length * 30,
                        fill: $scope.graphs[id].color
                    });
                    for (var i = 0; i < graphLinks.length; i++) {
                        $scope.linksArray.push({
                            data: graphLinks[i],
                            cx: $scope.graphs[graphLinks[i]].links.length * 30 * 3 + i * 80,
                            cy: $scope.graphs[graphLinks[i]].links.length * 30 * 2 + i * 30,
                            r: $scope.graphs[graphLinks[i]].links.length * 30,
                            fill: $scope.graphs[graphLinks[i]].color
                        });
                    }
                    $scope.lines = [];
                    for (var j = 1; j < $scope.linksArray.length; j++) {
                        $scope.lines.push({
                            x1: $scope.linksArray[0].cx,
                            y1: $scope.linksArray[0].cy,
                            x2: $scope.linksArray[j].cx,
                            y2: $scope.linksArray[j].cy,
                            style: 'stroke:rgb(130,130,130);stroke-width:2'
                        });
                    }
                }; // end render


            }
        }
    });
