# aster-rename-ids
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

> Rename ids with aster.

## Usage

First, install `aster-rename-ids` as a development dependency:

```shell
npm install --save-dev aster-rename-ids
```

Then, add it to your build script:

```javascript
var aster = require('aster');
var renameIds = require('aster-rename-ids');

aster.src('src/**/*.js')
.map(renameIds({
  from: /^_(.*)$/,
  to: function () {
    return '$' + privateIndex++;
  }
}))
.map(aster.dest('dist'))
.subscribe(aster.runner);
```

## API

### renameIds(options)

#### options.from
Type: `RegExp`

Pattern for identifiers you want to rename.

#### options.to
Type: `String` | `Function`

Replacement for given identifier patterns.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/aster-rename-ids
[npm-image]: https://badge.fury.io/js/aster-rename-ids.png

[travis-url]: http://travis-ci.org/asterjs/aster-rename-ids
[travis-image]: https://secure.travis-ci.org/asterjs/aster-rename-ids.png?branch=master
