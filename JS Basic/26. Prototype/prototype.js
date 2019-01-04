//constructor function
// https://hackernoon.com/prototypes-in-javascript-5bba2990e04b

function Mouse (color, weight){
  this.type = 'mouse';
  this.color = color;
  this.weight = weight;
  // this.sleep = function () {
  //   console.log('Sleeping ....');
  // }
};

console.log(Mouse.prototype.constructor === Mouse); // true

// prototype obj is shared between all objs created using NEW

Mouse.prototype.sleep = function () {
  console.log(this.color + 'Sleeping...');
}

var jerry = new Mouse('yellow', 20);

// best practice:

