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

var browser = require('open');

var ENGINES = require('./engine.json');


// =====================================================
// HELPERS
// =====================================================

function log(message, indentNum) {
  indentNum = indentNum || 1;
  var indent = '';
  for (var i=1; i<indentNum; i++) {
    indent += '  ';
  }
  console.log(indent, message || '');
}

// =====================================================
// GO!!
// =====================================================

var exports = {};


for(var _engine in ENGINES) {
  (function(_engine){
    exports[_engine] = function(terms) {
      log('Openning browser... please wait.'.green);
      browser(ENGINES[_engine] + terms);
    }; 
  })(_engine)
}

module.exports = exports;

