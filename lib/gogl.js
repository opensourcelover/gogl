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
    term    = process.argv[2];


// =====================================================
// SEARCH
// =====================================================


browser('http://74.125.23.31/search?hl=zh-CN&q=' + term);