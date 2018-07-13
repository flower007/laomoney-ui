<p align="center">
    <img alt="logo" src="https://static.laocaibao.com/1.6.5/static/images/logo_lcb.png" width="190" height="58" style="margin-bottom: 10px;">
</p>

<p align="center" style="margin: 30px 0 35px;">Lightweight Mobile UI Components built on Vue</p>

[![Build Status](https://travis-ci.org/flower007/laomoney-ui.svg?branch=master)](https://travis-ci.org/flower007/laomoney-ui)
[![downloads](https://img.shields.io/npm/dt/laomoney.svg)](https://www.npmjs.com/package/laomoney)
[![Coverage Status](https://img.shields.io/codecov/c/github/flower007/laomoney-ui/master.svg)](https://codecov.io/github/flower007/laomoney-ui?branch=master)
[![npm version](https://img.shields.io/npm/v/laomoney.svg?style=flat)](https://www.npmjs.com/package/laomoney)
[![license](https://img.shields.io/npm/l/laomoney.svg)](https://www.npmjs.com/package/laomoney)
[![JS Gzip Size](http://img.badgesize.io/https://unpkg.com/laomoney/dist/laomoney.min.js?compression=gzip&style=flat-square&label=JS%20gzip%20size)](https://unpkg.com/laomoney/dist/laomoney.min.js)
[![CSS Gzip Size](http://img.badgesize.io/https://unpkg.com/laomoney/dist/styles/laomoney.css?compression=gzip&style=flat-square&label=CSS%20gzip%20size)](https://unpkg.com/laomoney/dist/styles/laomoney.css)

## Install

#### NPM

```shell
npm i laomoney -S
```

#### YARN

```shell
yarn add laomoeny
```

#### CDN

```html
<!-- import style -->
<link rel="stylesheet" href="https://unpkg.com/laomoney/dist/styles/laomoney.css" />

<!-- import script -->
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script src="https://unpkg.com/laomoney/dist/laomoney.min.js"></script>
```

## Quickstart

#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

```bash
# Install babel-plugin-import
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
// Note: Don't set libraryDirectory if you are using webpack 1.
{
  "plugins": [
    ["import", {
      "libraryName": "laomoney",
      "libraryDirectory": "src/components"
    }]
  ]
}
```

Then you can import components from vant, equivalent to import manually below.

```js
import { Button } from 'laomoney';
```
Using css via `import`:

```js
import 'laomoney/dist/styles/laomoney.css';
```

#### 2. Import all components

```js
import Vue from 'vue';
import laomoney from 'laomoney';
import 'laomoney/dist/styles/laomoney.css';

Vue.use(laomoney);
```

## Browser Support

Modern browsers and Android 4.0+, iOS 6+.

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, laomoney

