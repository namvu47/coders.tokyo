//constructor function
function Mouse (color, weight){
  this.type = 'mouse';
  this.color = color;
  this.weight = weight
};

var mouse1 = new Mouse('black', 0.2);
var mouse2 = new Mouse('white', 0.5);

console.log(mouse1);
console.log(mouse2);

var tom = {
  name: 'tom',
  stomach: [],
  eat: function (mouse){
    this.stomach.push(mouse);
    return this;
  };
};

var m1 = {name: 'm1'};
var m2 = {name: 'm2'};
var m3 = {name: 'm3'};

tom.eat(m1).eat(m2).eat(m3) // method chaining