/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */

var rectangle = {
  width: 5,
  height: 10,
  getWidth: function () {
    console.log ('Chieu dai: ',this.width);
  },
  getHeigh: function (){
    console.log ('Chieu rong: ',this.height);
  },
  getArea: function () {
    console.log('Dien tich: ', this.width * this.height);
  }
};

rectangle.getWidth();
rectangle.getHeigh();
rectangle.getArea();

