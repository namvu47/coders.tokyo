var fs = require('fs');
var axios = require('axios');

// fs.readFile(
//   './data.json', 
//   { encoding: 'utf8'}, 
//   function(err, data) {
//     console.log('Data loaded from disk', data);

//     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function(res) {
//         console.log('Data downloaded from url', res.data);
//       });
//   }
// );

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. 
  Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */


function diskFile(path) {
	return new Promise (function (resolve, reject) {
		fs.readFile(path, {encoding: 'utf8'}, function (err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		})
	}
)}

function loadLink(link) {
	return new Promise (function (resolve,reject) {
		axios.get(link).then(function (res) {
			resolve(res.data);
		})
	}
)}

async function loadFile(path,link) {
	var loadDiskFile = await diskFile(path);
	var loadLinkContent = await loadLink(link);
	return [loadDiskFile, loadLinkContent];
}

loadFile('./song1.txt', 'https://jsonplaceholder.typicode.com/todos/1')
	.then(function (values) {
		console.log(values);
	})
	.catch(function (err) {
		console.log(err);
	})
