# next-it
> Iterator generator for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-it
```

## usage
```js
import '@jswork/next-it';

const arr = [0, 1, true, false, null, '', undefined];
const filter1 = arr.filter(nx.it('@'));
const filter2 = arr.filter(nx.it('!@'));
// filter1: [ 1, true ];
// filter2: [0, false, null, '', undefined];

const data = [
  {
    "url": "https://demo.com/api/static/images/f7128c5454ef48d431315169ac1c8faf.png",
    "file": {
      "path": "https://demo.com/api/static/images/f7128c5454ef48d431315169ac1c8faf.png",
      "size": 0
    }
  },
  {
    "url": "https://demo.com/api/static/images/8ea7935faede52aa3891436fa5f0dd68.png",
    "file": {
      "path": "https://demo.com/api/static/images/8ea7935faede52aa3891436fa5f0dd68.png",
      "size": 0
    }
  },
  {
    "url": "http://tmp/rYOV8lwCrW6885969266efbb54c322548e83ddd399e0.png",
    "file": {
      "path": "http://tmp/rYOV8lwCrW6885969266efbb54c322548e83ddd399e0.png",
      "size": 792
    }
  }
]

const filter1 = data.filter(nx.it('file.size'));
const filter2 = data.filter(nx.it('!file.size'));
// get size:0 or size!=0 values.
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-it/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-it
[version-url]: https://npmjs.org/package/@jswork/next-it

[license-image]: https://img.shields.io/npm/l/@jswork/next-it
[license-url]: https://github.com/afeiship/next-it/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-it
[size-url]: https://github.com/afeiship/next-it/blob/master/dist/next-it.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-it
[download-url]: https://www.npmjs.com/package/@jswork/next-it
