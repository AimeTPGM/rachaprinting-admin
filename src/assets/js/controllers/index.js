angular.module('app')
.controller('IndexCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.templates = {
      menubar: '/views/menubar.html',
      dashboard: '/views/dashboard.html'
    }


	}
])