var pages = [
'header.tmp',
'page1.tmp',
'footer.tmp'
];

var config = {
	replace: {
		"test":"Replaced Text"
	},
	pages:pages,
	to: 'index.html'
};


module.exports.config = config;
