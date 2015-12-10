angular.module('todomvc', ["ngRoute","ngResource"])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: "TodoCtrl",
    templateUrl: 'todomvc-index.html'
  })
  .otherwise({redirectTo: '/'});
}])
.controller('myTodo',['$scope','$http',function($scope,$http){
	$http.get("http://localhost:3000/db").then(function(data){
		$scope.todos = data;
	});
	$http.post("http://localhost:3000/posts/3/comments", {body: 'hello'}).then(function(data){
		$scope.todos = data;
	});
}]);