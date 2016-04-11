'use strict';
var fs = require('fs');
var path = require('path');
var test = require('ava');
var hashFile = require('../');
var src = path.join(__dirname, 'fixtures/test.jpg');

test('return a hashed file name from a string', function (t) {
	t.plan(1);

	hashFile(src).then(function (hash) {
		t.assert(hash === '1bc522c89a9cd36ee274b2e0b2c8bc91d2760c46', hash);
	});
});

test('return a hashed file name from a Buffer', function (t) {
	t.plan(1);

	hashFile(new Buffer(fs.readFileSync(src))).then(function (hash) {
		t.assert(hash === '1bc522c89a9cd36ee274b2e0b2c8bc91d2760c46', hash);
	});
});

test('synchronously return a hashed file name from a string', function (t) {
	var hash = hashFile.sync(src);

	t.assert(hash === '1bc522c89a9cd36ee274b2e0b2c8bc91d2760c46', hash);
	t.end();
});

test('synchronously return a hashed file name from a Buffer', function (t) {
	var hash = hashFile.sync(new Buffer(fs.readFileSync(src)));

	t.assert(hash === '1bc522c89a9cd36ee274b2e0b2c8bc91d2760c46', hash);
	t.end();
});
