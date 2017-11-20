angular.module('app')
.factory('OrderFactory',
  function(){
    var order = {}

    order.getOrders = function(){
      var orders = [
        {
          id: 1,
          customer: {
            name: 'เอม',
            phone: '081-234-5678',
            email: 'aim@gmail.com'
          },
          detail: {
            product: {
              id: 1,
              name: 'นามบัตร',
              attributes:
                {
                  format: 'A4',
                  print: 'สองหน้า',
                  printColor: 'พิมพ์สี',
                  paperType: '180 แกรม',
                  refinement: 'เคลือบ UV',
                }
            },
            mainChoice: 'ออกแบบเอง',
            price: '575',
            imgPath: '-',
            quantity: 100,
            deliveryDate: '23 พ.ย. 2560',
            status: 'เสร็จสิ้น'
          }
        },
        {
          id: 2,
          customer: {
            name: 'เจม',
            phone: '089-876-5432',
            email: 'james@gmail.com'
          },
          detail: {
            product: {
              id: 2,
              name: 'โปสเตอร์',
              attributes:
                {
                  format: '1260 x 1124 mm',
                  print: 'หน้าเดียว',
                  printColor: 'พิมพ์ขาวดำ',
                  paperType: '180 แกรม',
                  refinement: 'เคลือบ UV',
                }
            },
            mainChoice: 'ออกแบบเอง',
            price: '2300',
            imgPath: '-',
            quantity: 100,
            deliveryDate: '27 พ.ย. 2560',
            status: 'รอคอนเฟิร์มออเดอร์'
          }
        },
        {
          id: 3,
          customer: {
            name: 'บีม',
            phone: '088-765-4321',
            email: 'beam@gmail.com'
          },
          detail: {
            product: {
              id: 1,
              name: 'นามบัตร'
            },
            quantity: 200,
            deliveryDate: '23 พ.ย. 2560',
            status: 'กำลังดำเนินการ'
          }
        },
        {
          id: 4,
          customer: {
            name: 'เตชิน',
            phone: '082-345-6789',
            email: 'aim@gmail.com'
          },
          detail: {
            product: {
              id: 3,
              name: 'โบรชัวร์'
            },
            quantity: 1500,
            deliveryDate: '30 พ.ย. 2560',
            status: 'กำลังดำเนินการ'
          }
        },
        {
          id: 5,
          customer: {
            name: 'น้องหมี',
            phone: '089-876-5432',
            email: 'nongmee@gmail.com'
          },
          detail: {
            product: {
              id: 2,
              name: 'โปสเตอร์'
            },
            quantity: 999,
            deliveryDate: '1 ธ.ค. 2560',
            status: 'รอคอนเฟิร์มออเดอร์'
          }
        },
        {
          id: 6,
          customer: {
            name: 'ออม',
            phone: '088-765-4321',
            email: 'aom@gmail.com'
          },
          detail: {
            product: {
              id: 1,
              name: 'นามบัตร'
            },
            quantity: 450,
            deliveryDate: '27 พ.ย. 2560',
            status: 'กำลังดำเนินการ'
          }
        },
        {
          id: 7,
          customer: {
            name: 'เอ้',
            phone: '082-345-6789',
            email: 'eh@gmail.com'
          },
          detail: {
            product: {
              id: 3,
              name: 'โบรชัวร์'
            },
            quantity: 800,
            deliveryDate: '21 พ.ย. 2560',
            status: 'เสร็จสิ้น'
          }
        }
      ]
      return orders
    }

    order.getOrder = function(id){
      var temp = this.getOrders()
      for (var i = 0; i < temp.length; i++) {
        if(temp[i].id == id) return temp[i]
      }
      return id
    }
    return order
  }
);