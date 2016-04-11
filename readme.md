# hash-file [![Build Status](https://travis-ci.org/kevva/hash-file.svg?branch=master)](https://travis-ci.org/kevva/hash-file)

> Create a hashed file name


## Install

```
$ npm install --save hash-file
```


## Usage

```js
const hashFile = require('hash-file');

hashFile('test.jpg').then(hash => {
	console.log(hash);
	//=> 'ac8b2c4b75b2d36988c62b919a857f1baacfcd4c'
});

hashFile.sync('test.jpg');
//=> 'ac8b2c4b75b2d36988c62b919a857f1baacfcd4c'
```


## License

MIT © [Kevin Mårtensson](http://kevinmartensson.com)
