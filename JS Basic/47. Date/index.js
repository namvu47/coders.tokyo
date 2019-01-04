// date --> return number of ms from 1-1-1970
// https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Date
// module moment.js: http://momentjs.com/docs/

// var now = new Date();

// var myBirthDay = new Date(1991, 6, 4); // 4/7/1991

// console.log(now.getTime());
// console.log(myBirthDay.getTime());

var moment = require('moment');

var now = moment('2018-11-14 00:00'); // return object

console.log(now.fromNow());