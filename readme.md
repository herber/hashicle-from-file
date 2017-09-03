# hashicle-from-file [![Build status](https://ci.appveyor.com/api/projects/status/uc1qp55ga6behad9?svg=true)](https://ci.appveyor.com/project/tobihrbr/hashicle-from-file) [![Coverage Status](https://coveralls.io/repos/github/tobihrbr/hashicle-from-file/badge.svg?branch=master)](https://coveralls.io/github/tobihrbr/hashicle-from-file?branch=master)

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
