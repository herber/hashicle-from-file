# hashicle-from-file [![Codestyle fyi](https://img.shields.io/badge/code%20style-fyi-E91E63.svg)](https://github.com/tobihrbr/fyi) [![Build Status](https://travis-ci.org/herber/hashicle-from-file.svg?branch=master)](https://travis-ci.org/herber/hashicle-from-file) [![Coverage Status](https://coveralls.io/repos/github/tobihrbr/hashicle-from-file/badge.svg?branch=master)](https://coveralls.io/github/tobihrbr/hashicle-from-file?branch=master) 

> Generate hashes from files

## Install

```
$ npm install --save hashicle-from-file
```

## Usage

```js
const hashicle = require('hashicle-from-file');

hashicle('my-file.ext').then((hash) => {
  // do something
});
```

## API

### hashicle(path, [algorithm, out])

#### path

Type: `string`

Your files path

#### algorithm

Type: `string`<br>
Default: `md5`

Hashing algorithm

#### out

Type: `string`<br>
Default: `hex`

Output format

## License

MIT © [Tobias Herber](https://tobihrbr.com)
