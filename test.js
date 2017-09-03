const ava = require('ava');
const path = require('path');
const hashicle = require('./');

ava('creates hash from file', async t => {
	const hash = await hashicle(path.join(__dirname, 'fixture.txt'));

	t.is(hash, 'f7cb472f0f1d6ee2b0445b1b84da2956');

	return hashicle(path.join(__dirname, 'nope.txt')).catch((err) => {
	  t.true(err instanceof Error || err instanceof TypeError)
	})
});
