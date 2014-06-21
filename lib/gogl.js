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


browser('http://74.125.23.31/search?hl=zh-CN&q=' + terms.join('+'));