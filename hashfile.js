'use strict';

var crypto = require('crypto');
var fs = require('fs');

module.exports = function (src) {
    var data = fs.readFileSync(String(src), 'utf8');
    return crypto.createHash('sha1').update(data).digest('hex');
};
