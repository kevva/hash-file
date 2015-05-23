'use strict';
var fs = require('fs');
var path = require('path');
var test = require('ava');
var hashFile = require('../');

test('return a hashed file name from a string', function (t) {
	t.plan(2);

	var src = path.join(__dirname, 'fixtures/test.jpg');

	hashFile(src, function (err, hash) {
		t.assert(!err, err);
		t.assert(hash === '1bc522c89a9cd36ee274b2e0b2c8bc91d2760c46', hash);
	});
});

test('return a hashed file name from a Buffer', function (t) {
	t.plan(2);

	var src = new Buffer(fs.readFileSync(path.join(__dirname, 'fixtures/test.jpg')));

	hashFile(src, function (err, hash) {
		t.assert(!err, err);
		t.assert(hash === '1bc522c89a9cd36ee274b2e0b2c8bc91d2760c46', hash);
	});
});

test('synchronously return a hashed file name from a string', function (t) {
	var src = path.join(__dirname, 'fixtures/test.jpg');
	var hash = hashFile.sync(src);

	t.assert(hash === '1bc522c89a9cd36ee274b2e0b2c8bc91d2760c46', hash);
	t.end();
});

test('synchronously return a hashed file name from a Buffer', function (t) {
	var src = new Buffer(fs.readFileSync(path.join(__dirname, 'fixtures/test.jpg')));
	var hash = hashFile.sync(src);

	t.assert(hash === '1bc522c89a9cd36ee274b2e0b2c8bc91d2760c46', hash);
	t.end();
});
