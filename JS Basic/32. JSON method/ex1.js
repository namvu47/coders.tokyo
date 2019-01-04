/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */

var fs = require ('fs');

var myPetString = fs.readFileSync ('./data.json', 'utf8');
var myPetObject = JSON.parse(myPetString);

console.log(typeof myPetString);
console.log(myPetObject.name);

myPetObject ['members'] = {name: 'Name', age: 27, hometown: 'Hai Duong'};
var myPetNewString = JSON.stringify(myPetObject);

fs.writeFileSync('./data.json', myPetNewString, 'utf8');

