# Convert String to chunks of different sizes

[![Build and test](https://github.com/shahen94/string-to-chunks/actions/workflows/build.yml/badge.svg)](https://github.com/shahen94/string-to-chunks/actions/workflows/build.yml)


### Getting started

```sh
$ yarn add string-to-chunks
```

### Usage

```typescript
import stringToChunks from 'string-to-chunks';

const value = '12345';
const chunksNeeded = [1, 2, 2];

const chunked = stringToChunks(value, chunksNeeded);

console.log(chunked); // ['1', '23', '45'];
```