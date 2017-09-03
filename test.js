const ava = require('ava');
const path = require('path');
const hashicle = require('./');

ava('creates hash from file', async t => {
	const hash = await hashicle(path.join(__dirname, 'fixture.txt'));

	t.true(typeof hash === 'string');

	return hashicle(path.join(__dirname, 'nope.txt')).catch((err) => {
	  t.true(err instanceof Error || err instanceof TypeError)
	})
});
