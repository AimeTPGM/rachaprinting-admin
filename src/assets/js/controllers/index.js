angular.module('app')
.controller('IndexCtrl',['$scope', '$http','$window', 'OrderService',
	function($scope, $http, $window, OrderService){
		$scope.templates = {
      menubar: '/views/menubar.html',
      dashboard: '/views/dashboard.html'
    }
    var topics = {
      all: 'คำสั่งซื้อทั้งหมด',
      waiting: 'คำสั่งซื้อที่รอการยืนยัน',
      confirm: 'คำสั่งซื้อที่กำลังดำเนินการ',
      done: 'คำสั่งซื้อที่เสร็จสิ้น'
    }
    $scope.orderStatus = {
      waiting: 'รอคอนเฟิร์มออเดอร์',
      confirm: 'กำลังดำเนินการ',
      done: 'เสร็จสิ้น'
    }

    $scope.customOrderBy = 'id'

    $scope.orderBy = function(param){
      if(param == $scope.customOrderBy) $scope.customOrderBy = "-"+param
      else $scope.customOrderBy = param
    }

    $scope.loadOrder = function(orderStatus){
      if(orderStatus == 1) {
        $scope.orders = OrderService.getOrders
        $scope.topic = topics.all
        console.log($scope.orders)
      }
      else if(orderStatus == 2){
        $scope.orders = OrderService.getWaitingOrders()
        $scope.topic = topics.waiting
      } 
      else if(orderStatus == 3){
        $scope.orders = OrderService.getConfirmedOrders()
        $scope.topic = topics.confirm
      } 
      else if(orderStatus == 4){
        $scope.orders = OrderService.getDoneOrders()
        $scope.topic = topics.done
      }
    }


	}
])