/*global describe, it */
'use strict';

var assert = require('assert');
var hashfile = require('../hashfile');
var path = require('path');

describe('hashfile()', function () {
    it('should return a hashed file name', function (cb) {
        var src = path.join(__dirname, 'fixtures/test.jpg');
        cb(assert.equal(hashfile(src), 'ac8b2c4b75b2d36988c62b919a857f1baacfcd4c'));
    });
});
