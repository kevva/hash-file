'use strict';
const hasha = require('hasha');
const opts = {algorithm: 'sha1'};

module.exports = src => {
	if (Buffer.isBuffer(src)) {
		return Promise.resolve(hasha(src, opts));
	}

	return hasha.fromFile(src, opts);
};

module.exports.sync = src => Buffer.isBuffer(src) ? hasha(src, opts) : hasha.fromFileSync(src, opts);
