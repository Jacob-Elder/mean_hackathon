//Your angular controllers get defined here.
angular.module("BlogApp")
.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
	console.log("HomeCtrl loaded!");
}])
.controller('NewPostCtrl', ['$scope', '$http', function($scope, $http){
	console.log("NewPostCtrl loaded!");
}])
.controller('ProfileCtrl', ['$scope', '$http', function($scope, $http){
	console.log("ProfileCtrl loaded!");
}]);
