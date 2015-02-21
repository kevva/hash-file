'use strict';

var fs = require('fs');
var hashfile = require('../');
var path = require('path');
var test = require('ava');

test('return a hashed file name from a string', function (t) {
	var src = path.join(__dirname, 'fixtures/test.jpg');
	t.assert(hashfile(src) === 'ac8b2c4b75b2d36988c62b919a857f1baacfcd4c');
	t.end();
});

test('should return a hashed file name from a Buffer', function (t) {
	var src = new Buffer(fs.readFileSync(path.join(__dirname, 'fixtures/test.jpg')));
	t.assert(hashfile(src) === 'ac8b2c4b75b2d36988c62b919a857f1baacfcd4c');
	t.end();
});
