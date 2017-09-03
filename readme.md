# hashicle-from-file

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
