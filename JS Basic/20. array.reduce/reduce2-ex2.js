// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
  return arr.reduce (function(allLetters,letter){
    if (letter in allLetters) {
      allLetters[letter]++;
    } else {
      allLetters[letter] = 1;
    }
  return allLetters;
  },{});
}

countOccurrences(['a', 'b', 'c', 'b', 'a']);
// { 
//   a: 2, 
//   b: 2, 
//   c: 1 
// }