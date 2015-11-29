angular.module("todomvc")
.controller("TodoCtrl",["$scope","$routeParams","$filter",function($scope,$routeParams,$filter){
	var todos = $scope.todos = [];

	$scope.newTodo = '';
	$scope.editedTodo = null;

	$scope.$watch('todos',function(){});

	$scope.addTodo = function(){
		var newTodo = $scope.newTodo.trim();
		if(!newTodo.length){
			return;
		}
		todos.push({
			title:newTodo,
			completed:false,
			edit:false
		});
		$scope.newTodo = '';
	}
	$scope.removeTodo = function(todo){
		todos.splice(todos.indexOf(todo),1);
	}
	$scope.editTodo = function(todo){
		var index = todos.indexOf(todo);
		todos[index].edit = true;
	}
	$scope.saveEdits = function(todo){
		var index = todos.indexOf(todo);
		todos[index].edit = false;
	}
	$scope.markAll = function(allChecked){
		todos.forEach(function(todo){
			return todo.completed = allChecked;
		});
	}
}]);