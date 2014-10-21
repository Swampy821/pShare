function r() {

}
var reg;
r.prototype.replace = function(fileStr, replaceObj) {
	for(var key in replaceObj) {
		reg = new RegExp('{{' + key + '}}', 'g');
		fileStr = fileStr.replace(reg, replaceObj[key]);
	}
	return fileStr;
};


module.exports = new r();