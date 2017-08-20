# ArvouxBackgroundImage
[![Build Status](https://travis-ci.org/jackzard/ArvouxBackgroundImage.svg?branch=master)](https://travis-ci.org/jackzard/ArvouxBackgroundImage)
[![codecov](https://codecov.io/gh/jackzard/ArvouxBackgroundImage/branch/master/graph/badge.svg)](https://codecov.io/gh/jackzard/ArvouxBackgroundImage)
[![npm version](https://badge.fury.io/js/ArvouxBackgroundImage.svg)](http://badge.fury.io/js/ArvouxBackgroundImage)
[![devDependency Status](https://david-dm.org/jackzard/ArvouxBackgroundImage/dev-status.svg)](https://david-dm.org/jackzard/ArvouxBackgroundImage?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/jackzard/ArvouxBackgroundImage.svg)](https://github.com/jackzard/ArvouxBackgroundImage/issues)
[![GitHub stars](https://img.shields.io/github/stars/jackzard/ArvouxBackgroundImage.svg)](https://github.com/jackzard/ArvouxBackgroundImage/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/jackzard/ArvouxBackgroundImage/master/LICENSE)

## Demo
https://jackzard.github.io/ArvouxBackgroundImage/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save ArvouxBackgroundImage
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { ArvouxBackgroundImageModule } from 'ArvouxBackgroundImage';

@NgModule({
  imports: [
    ArvouxBackgroundImageModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/jackzard/ArvouxBackgroundImage/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ArvouxBackgroundImage/bundles/ArvouxBackgroundImage.umd.js"></script>
<script>
    // everything is exported arvouxBackgroundImage namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://jackzard.github.io/ArvouxBackgroundImage/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
