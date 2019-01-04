// function as parameter (callback)

var coffeeMachine = {
  makeCoffee : function (onFininsh) {
    console.log('Making coffee...');
    onFininsh();
  }
}

var beep = function {
  console.log('Beep beep...');
}

coffeeMachine.makeCoffee(beep);