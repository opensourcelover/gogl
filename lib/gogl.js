/*
 * Copyright 2014, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 *
 * Author: Light <light-li@hotmail.com>
 */
 
'use strict';

// =====================================================
// CONFIGURATION
// =====================================================

var browser = require('open'),
    terms    = process.argv.slice(2);


// =====================================================
// SEARCH
// =====================================================

if(terms.length == 0) {
	return console.log('Please input something to search!');
}



var exports = {};

exports.so = function(){
	browser('http://www.so.com/s?q=' + terms.join('+'));
}

exports.google = function() {
	browser('http://74.125.23.31/search?hl=zh-CN&q=' + terms.join('+'));
}


exports.baidu = function() {
	browser('http://www.baidu.com/s?wd=' + terms.join('+'));
}

module.exports = exports;