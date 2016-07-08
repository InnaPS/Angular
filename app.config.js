angular
    .module('myApp')
    .config(function ($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'my-container/partials/default.html'
            })
            .when('/graphs', {
                templateUrl: 'my-container/partials/graphs.html'
            })
            .when('/graph', {
                templateUrl: 'my-container/partials/graph.html'
                //controller: 'graphCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    });
    /*.controller('graphCtrl', function($scope, $location, $routeParams) {
        $scope.graph = $routeParams.id;
    });*/