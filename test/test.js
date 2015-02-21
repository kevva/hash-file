/*global describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var hashfile = require('../');
var path = require('path');

describe('hashfile()', function () {
	it('should return a hashed file name from a String', function (cb) {
		var src = path.join(__dirname, 'fixtures/test.jpg');
		cb(assert.equal(hashfile(src), 'ac8b2c4b75b2d36988c62b919a857f1baacfcd4c'));
	});

	it('should return a hashed file name from a Buffer', function (cb) {
		var src = new Buffer(fs.readFileSync(path.join(__dirname, 'fixtures/test.jpg')));
		cb(assert.equal(hashfile(src), 'ac8b2c4b75b2d36988c62b919a857f1baacfcd4c'));
	});
});
