var Mouse = require('./mouse.js');
var Cat = require ('./cat.js');

var mickey = new Mouse('black');
var tom = new Cat();

tom.eat(mickey);
console.log (tom);

