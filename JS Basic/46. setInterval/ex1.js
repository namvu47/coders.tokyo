/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
async function countDown(x) {
	await (new Promise (function (resolve, reject) {
		var intervalId = setInterval(function () {
			console.log(x);
			x--;
			if (x <= 0) {
				clearInterval(intervalId);
				console.log('Happy New Year!' );
			}
		}, 1000)
	}))
}

countDown(5);