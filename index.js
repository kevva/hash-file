'use strict';
var hasha = require('hasha');
var opts = {algorithm: 'sha1'};

module.exports = function (src, cb) {
	if (Buffer.isBuffer(src)) {
		setImmediate(cb, null, hasha(src, opts));
		return;
	}

	hasha.fromFile(src, opts, cb);
};

module.exports.sync = function (src) {
	return Buffer.isBuffer(src) ? hasha(src, opts) : hasha.fromFileSync(src, opts);
};
