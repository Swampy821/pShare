var fs = require('fs');

module.exports.makeDir = function(dir) {
	if(!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
};

module.exports.read = function(file) {
	return fs.readFileSync(file, 'utf8');
};

module.exports.write = function(data, file) {
	fs.writeFileSync(file, data);
};


module.exports.fileList = function(folder) {
	var files = fs.readdirSync(folder);
	return files;
};