'use strict'


/**
	process.argv
	0: node
	1: <name-of-your-js-file>
	2+....<additional arguments passed>
*/

var fs = require('fs'),
	args = process.argv;

function convertThis() {
	if(args.length > 2) {

		var _file = args[2];

		if(fs.existsSync(_file)) {
			var content = fs.readFileSync(_file, 'utf8');
			fs.writeFileSync(_file, content.toUpperCase());
			console.log('Done!');
		} else {
			console.log('File does not exist - ' + _file);
		}

	} else {
		console.log('ERROR: Pass on a file name/path');
	}	
}


exports.convert = convertThis;