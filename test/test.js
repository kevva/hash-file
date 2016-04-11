import fs from 'fs';
import path from 'path';
import test from 'ava';
import fn from '../';

const src = path.join(__dirname, 'fixtures/test.jpg');

test('return a hashed file name from a string', async t => {
	t.is(await fn(src), '1bc522c89a9cd36ee274b2e0b2c8bc91d2760c46');
});

test('return a hashed file name from a Buffer', async t => {
	t.is(await fn(new Buffer(fs.readFileSync(src))), '1bc522c89a9cd36ee274b2e0b2c8bc91d2760c46');
});

test('synchronously return a hashed file name from a string', t => {
	t.is(fn.sync(src), '1bc522c89a9cd36ee274b2e0b2c8bc91d2760c46');
});

test('synchronously return a hashed file name from a Buffer', t => {
	t.is(fn.sync(new Buffer(fs.readFileSync(src))), '1bc522c89a9cd36ee274b2e0b2c8bc91d2760c46');
});
