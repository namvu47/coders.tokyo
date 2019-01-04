var big = {
  name: 'Big',
  age: 2,
  breed: 'Pom',
  isPicky: true,
  weight: 5,
  bark: function() {
    console.log('Meo Meo, my name is: ', this.name) //return undefined
  } //anonymous func
  eat: function(bone){
    this.weight = this.weight + bone.weight;
  }
};

var bone = {weight: 0.5};
big.eat(bone);