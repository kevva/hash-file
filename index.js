'use strict';

var crypto = require('crypto');
var fs = require('fs');

module.exports = function (src) {
	var data = Buffer.isBuffer(src) ? src.toString('utf8') : fs.readFileSync(String(src), 'utf8');
	return crypto.createHash('sha1').update(data).digest('hex');
};
