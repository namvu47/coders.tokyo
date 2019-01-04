// Make an array of strings of the names
function namesOnly(arr) {
  var namesArr = [];
  for (var i = 0; i<arr.length; i++){
    namesArr.push(arr[i].name);
  }
  console.log(namesArr);
}

namesOnly([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
])
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]