// for ... of: array
// for ... in: object

var employees = [
  {name: 'A', age: 28},
  {name: 'B', age: 26},
  {name: 'C', age: 25}
];

for (var employee of employees){
  console.log(employee.name, employee.age);
}

var big = {
  name: 'Big',
  age: 2,
  breed: 'Pom',
  isPicky: true
};

for ( var key in big){
  console.log(key, big[key]);
}