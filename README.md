# hash-file [![Build Status](https://secure.travis-ci.org/kevva/hash-file.png?branch=master)](http://travis-ci.org/kevva/hash-file)

Create a hashed file name with Node.js.

## Getting started

Install with [npm](https://npmjs.org/package/hash-file): `npm install hash-file`

## Examples

If you're fetching an archive you can set `extract: true` in options and
it'll extract it for you.

```js
var hashfile = require('hashfile');

hashfile('test.zip');
```

## API

### download(src)

Create a hashed file name from a files content.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) [Kevin Mårtensson](http://kevinmartensson.com)
