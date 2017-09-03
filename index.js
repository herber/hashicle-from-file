const hashicle = require('hashicle');
const fs = require('fs');

module.exports = (path, algorithm, out) => new Promise((resolve, reject) => {
	fs.readFile(path, (err, data) => {
	  if (err) return reject(err);

		resolve(hashicle(data.toString()));
	});
});
