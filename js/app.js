angular.module('todomvc', ["ngRoute","ngResource"]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: "TodoCtrl",
    templateUrl: 'todomvc-index.html'
  })
  .otherwise({redirectTo: '/'});
}]);