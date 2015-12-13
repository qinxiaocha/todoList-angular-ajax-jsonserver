function createXHR(){
    if(typeof XMLHttpRequest != 'undefined'){
        return new XMLHttpRequest();
    } else if(typeof ACtiveXObject != 'undefined'){
        if (typeof arguments.callee.activeXString != 'string') {
            var versions = ['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'],
                i,len;
            for(i = 0,len = versions.length; i<len;i++){
                try{
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                }catch(ex){

                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    }else{
        throw new Error('No XHR object available.');
    }
}

var ajax = {
    get: function(url, cb) {
        var xhr = new createXHR()
         
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if((xhr.status >= 200 && xhr.status <300) || xhr.status == 304){
                    var data = JSON.parse(xhr.responseText);
                    cb&&cb(data)
                }else{
                    console.log('Request was unsuccessful' + xhr.status);
                }
            }
        }
         xhr.open('get', url, true);
         xhr.send(null);

    },
    post: function (url,data,cb) {
        var xhr = new createXHR()
         
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if((xhr.status >= 200 && xhr.status <300) || xhr.status == 304){
                    var data = JSON.parse(xhr.responseText);
                    cb&&cb(data)
                }else{
                    console.log('Request was unsuccessful' + xhr.status);
                }
            }
        }
        xhr.open('post', url, true);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        var arr = []
        for(var k in data){
            arr.push(k+"="+(data[k]).toString())
        }

        xhr.send(arr.join('&'));
    }
}

angular.module("todomvc")
.controller("TodoCtrl",["$scope","$routeParams","$filter",function($scope,$routeParams,$filter){

    $scope.todos=[];

    ajax.get('http://localhost:3000/db', function(data) {
        $scope.todos = data.list;
    });


    // $http.get("http://localhost:3000/db").then(function(data){
 //     $scope.todos = data;
 //    }).error(function(data){
 //     console.log('Request is not function');
 //    });

    $scope.newTodo = '';
    $scope.editedTodo = null;

    $scope.addTodo = function(){
        var newTodo = $scope.newTodo.trim();
        if(!newTodo.length){
            return;
        }

        var postData = {
            "title":newTodo,
            "completed":false,
            edit:false
        };
        console.log(postData);
        $scope.todos.push(postData);

        ajax.post('http://localhost:3000/list',postData);

        $scope.newTodo = '';
    }
    $scope.removeTodo = function(todo){
        $scope.todos.splice($scope.todos.indexOf(todo),1);
    }
    $scope.editTodo = function(todo){
        var index = $scope.todos.indexOf(todo);
        $scope.todos[index].edit = true;
    }
    $scope.saveEdits = function(todo){
        var index = $scope.todos.indexOf(todo);
        $scope.todos[index].edit = false;
    }
    $scope.markAll = function(allChecked){
        $scope.todos.forEach(function(todo){
            return todo.completed = allChecked;
        });
    }
}]);