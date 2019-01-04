/**
 * for (init;condition;final-expression){
 * statements;
 * }
 */

for (var i = 0;i < 10; i++ ){
  console.log(i);
}

for (var i = 9; i >= 0; i--){
  console.log(i);
}

var employees = [
  {name: 'A', age: 28},
  {name: 'B', age: 26},
  {name: 'C', age: 25}
];

for (i = 0; i < 3; i++){
  console.log(employees[i].name, employees[i].age);
}

