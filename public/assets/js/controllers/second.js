angular.module('app')
.controller('DashBoardCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.hello = "This is second page!";
	}
]);