// Given a list of students, filter out the famale ones
function filterOutFemales(members) {
  newArr = [];
  for (var member of members) {
    if (member.gender !== 'female'){
      newArr.push(member);
    }
  }
  return newArr;
}