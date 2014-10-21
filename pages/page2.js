var pages = [
'header.tmp',
'page1.tmp',
'footer.tmp'
];

var config = {
	replace: {
		"test":"PAGE 2 REPLACE"
	},
	pages:pages,
	to: 'page2.html'
};


module.exports.config = config;
