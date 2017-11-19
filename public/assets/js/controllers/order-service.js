angular.module('app')
.service('OrderService',
  function(OrderFactory){
    this.getOrders = OrderFactory.getOrders()
    this.getWaitingOrders = function(){
      return OrderFactory.getOrders().filter(function (i,n){ return i.detail.status === 'รอคอนเฟิร์มออเดอร์' })
    }
    this.getConfirmedOrders = function(){
      return OrderFactory.getOrders().filter(function (i,n){ return i.detail.status === 'กำลังดำเนินการ' })
    }
    this.getDoneOrders = function(){
      return OrderFactory.getOrders().filter(function (i,n){ return i.detail.status === 'เสร็จสิ้น' })
    }
  }
);