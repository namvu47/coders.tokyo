// npm init
// npm install readline-Sync

var readLineSync = require ('readline-sync');

// var userName = readLineSync.question('Can I have your name please? ');
// console.log('Hi '+ userName + '!');

// var languages = [];
// var language = readLineSync.question('What language can you speak? ');
// languages.push(language);
// console.log(languages);

var myPet = [];
var pet = {};

var name = readLineSync.question('Your pet name: ');
var age = readLineSync.question('Your pet age: ');
var weight = readLineSync.question('Your pet weight: ');

pet.name = name;
pet.age = parseInt(age);
pet.weight = parseInt(weight);
console.log(pet);