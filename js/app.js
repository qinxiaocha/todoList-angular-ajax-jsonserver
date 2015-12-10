angular.module('todomvc', ["ngRoute","ngResource"])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: "TodoCtrl",
    templateUrl: 'todomvc-index.html'
  })
  .otherwise({redirectTo: '/'});
}])
.controller('myTodo',['$scope','$http',function($scope,$http){
	$http.get("../routes.json").then(function(data){
		$scope.data = data;
	});
}];;