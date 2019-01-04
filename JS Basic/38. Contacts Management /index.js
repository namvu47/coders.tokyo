/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readLineSync = require ('readline-sync');
var fs = require ('fs');

var loadData = fs.readFileSync('./contacts.json', { 'encoding': 'utf8' } );
contacts = JSON.parse(loadData);

function showAllcontacts () {
	for (var contact of contacts) {
		console.log(contact.name + ': ' + contact.phone);
	};
	console.log('\n');
}

function createNewContact() {
	var newContact = {};
	var name = readLineSync.question('Enter name: ');
	var phone = readLineSync.question('Enter phone: ');
	newContact['name'] = name;
	newContact['phone'] = phone;
	contacts.push(newContact);
}

function searchContact() {
	var searchInquiry = (readLineSync.question('What are you looking for? \n')).toLowerCase();
	searchResult = [];
	for (var contact of contacts) {
		if ( (contact.name.toLowerCase()).includes(searchInquiry) === true || (contact.phone).includes(searchInquiry) === true ) {
			searchResult.push(contact);
			console.log('Search result: ');
			console.log(contact.name + ': ' + contact.phone);
		} 
	}
	
	return searchResult;
}

function changeContact() {
	searchContact();
	if (searchResult.length !== 1) {
		userInput = (readLineSync.question('Specify the name: ')).toLowerCase();
		for (var contact of searchResult) {
			var searchResultFilter = searchResult.find(function (contact) {
				return contact.name.toLowerCase() === userInput 
			});
		}
	} else {
		searchResultFilter = searchResult [0];
	}
	newContact = changeContact1(searchResultFilter);
	return newContact;
};


function changeContact1(contact) {
	console.log('--------------------');
	console.log('1. Change name: ');
	console.log('2. Change phone: ');
	userInput1 = readLineSync.question('What would you like to change? ');
	switch (userInput1) {
		case '1':
			contact['name'] = readLineSync.question('> New name: ');
			break;
		case '2':
			contact['phone'] = readLineSync.question('> New phone: ')
			break;
		default:
			console.log('Wrong option. Choose again: ');
			changeContact1(contact);
			break;
	}
	return contact;
}

function deleteContact() {
	searchContact();
	console.log('Deleting >>>>>>>');
	var index =  contacts.indexOf(searchResult[0]);
	contacts.splice(index,1);
	return contacts;
}

function saveChanges() {
	var dataToString = JSON.stringify(contacts);
	fs.writeFileSync('./contacts.json', dataToString);
}


function showMenu() {
	console.log('1. Show all contacts');
	console.log('2. Create new contact');
	console.log('3. Search for a contact');
	console.log('4. Change a contact');
	console.log('5. Delete contact');
	console.log('6. Save');
	console.log('7. Exit')
	console.log ('------------------------');

	var optionInput = readLineSync.question('Enter your option:');
	switch (optionInput) {
 		case '1':
 			showAllcontacts();
 			showMenu();
 			break;
 		case '2':
 			createNewContact();
 			showMenu();
 			break;
 		case '3':
 			searchContact();
 			showMenu();
 			break;
 		case '4':
 			changeContact();
 			showMenu();
 			break;
 		case '5':
 			deleteContact();
 			showMenu();
 			break;
 		case '6':
 			saveChanges();
 			showMenu();
 			break;
 		case '7':
 			break;
 		default:
 			console.log('Wrong option. Please choose again: ');
 			showMenu();
 			break;
 	}
}



 function main() {
 	showMenu();
 }

 main();