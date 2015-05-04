'use strict';

var crypto = require('crypto');
var fs = require('fs');

module.exports = function (src, cb) {
	if (Buffer.isBuffer(src)) {
		var data = src.toString('utf8');
		cb(null, crypto.createHash('sha1').update(data).digest('hex'));
		return;
	}

	fs.readFile(String(src), 'utf8', function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, crypto.createHash('sha1').update(data).digest('hex'));
	});
};

module.exports.sync = function (src) {
	var data = Buffer.isBuffer(src) ? src.toString('utf8') : fs.readFileSync(String(src), 'utf8');
	return crypto.createHash('sha1').update(data).digest('hex');
};
