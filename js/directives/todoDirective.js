angular.module("todomvc",[])
.directive('autoFocus',function(){
	return {
		link:function(scope,element,attrs){
			element[0].focus();
		}
	}
});