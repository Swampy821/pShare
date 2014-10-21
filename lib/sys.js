var file = require('./file.js');
var config = require('./config.json');
var rep = require('./replacer.js');
var template = config.templates;
var pages = config.pages;
var folderArray = file.fileList('./' + config.pages);
var buildCount = 0;

file.makeDir(config.build);

for(var b=0; b<folderArray.length; b++) {
	var page = require('./../' + config.pages + '/' + folderArray[b]);
	var pageArray = page.config.pages;

	var pageData = '';

	for(var i=0; i<pageArray.length; i++) {
		pageData += file.read('./' + template + '/' + pageArray[i])
	}

	pageData = rep.replace(pageData, page.config.replace);
	file.write(pageData, './' + config.build + '/' + page.config.to);
	buildCount++;
}

console.log('Built ' + buildCount + ' file(s).	' )