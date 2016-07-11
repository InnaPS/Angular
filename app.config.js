angular
    .module('myApp')
    .config(function ($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'my-container/partials/default.html',
                controller: 'defaultCtrl'
            })
            .when('/graph/:id', {
                templateUrl: 'my-container/partials/graph.html',
                controller: 'graphCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .controller('defaultCtrl', function($scope, $location, $routeParams) {
        $scope.renderLinks();
    })
    .controller('graphCtrl', function($scope, $location, $routeParams) {
        $scope.circle_Id = $routeParams.id;
        $scope.renderLinks($scope.circle_Id);
    });