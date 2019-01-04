// Viết hàm lấy extension của một file

function getExtensionFilename(filename) {
	return filename.slice(filename.indexOf('.')+1, filename.length);
}
