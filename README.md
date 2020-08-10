# fallback-image

[![Version](https://img.shields.io/npm/v/@binance-academy/fallback-image.svg?style=flat-square)](https://www.npmjs.com/package/@binance-academy/fallback-image)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/binance-academy/fallback-image/Lint/master?style=flat-square)](https://github.com/binance-academy/fallback-image/actions?query=workflow%3ALint)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@binance-academy/fallback-image.svg?color=yellow&style=flat-square)](https://bundlephobia.com/result?p=@binance-academy/fallback-image)
[![Downloads](https://img.shields.io/npm/dm/@binance-academy/fallback-image.svg?color=green&style=flat-square)](https://www.npmjs.com/package/@binance-academy/fallback-image)
[![CodeStyle](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Display a fallback while an image is loading, to avoid a jump effect when the image loads.

[![example](example.gif)](https://academy.binance.com)

## Install

```shell
npm i @binance-academy/fallback-image
# -or-
yarn add @binance-academy/fallback-image
```

## Usage

### Props

`src`: Url of the image

`alt`: Alternative text to displayed if the image connot be loaded

`invertedRatio`: Inverted ratio as a % (**Default:** 9/16\*100=56.25)

### Example

```javascript
import Image from "fallback-image";

...

<Image alt="Alt text" src="https://via.placeholder.com/800x450" />

<Image
    alt="Alt text"
    src="https://via.placeholder.com/400x300"
    invertedRatio={(3 / 4) * 100}
/>
```
