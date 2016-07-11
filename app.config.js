angular
    .module('myApp')
    .config(function ($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'my-container/partials/default.html'
            })
            .when('/graph/:id', {
                templateUrl: 'my-container/partials/graph.html',
                controller: 'graphCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .controller('graphCtrl', function($scope, $location, $routeParams) {
        $scope.graph_Id = $routeParams.id;
    });