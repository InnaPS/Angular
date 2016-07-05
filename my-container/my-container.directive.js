angular
    .module('myContainer')
    .directive('myContainer', function () {
        return {
            restrict: 'EA',
            templateUrl:  'my-container/my-container.template.html',
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

                $scope.drawDefault = function(){

                };
            }/*,
            templateNamespace: 'svg'*/

        }
    });
