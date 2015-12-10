angular.module('todomvc', ["ngRoute","ngResource"])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: "TodoCtrl",
    templateUrl: 'todomvc-index.html'
  })
  .otherwise({redirectTo: '/'});
}])
.controller('myTodo',['$scope','$http',function($scope,$http){
<<<<<<< HEAD
	$http.get("http://localhost:3000/db").then(function(data){
		$scope.todos = data;
	});
	$http.post("http://localhost:3000/posts/3/comments", {body: 'hello'}).then(function(data){
		$scope.todos = data;
	});
}]);
=======
	$http.get("../routes.json").then(function(data){
		$scope.data = data;
	});
}];;
>>>>>>> 4cde3ee9635701befa5f36675e7c1b2b4072cc79
