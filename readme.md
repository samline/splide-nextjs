# Splide | SSR

**[Splide](https://splidejs.com/) is a lightweight, powerful and flexible slider and carousel, written in pure JavaScript without any dependencies.**

* [Demo](https://splidejs.com/)
* [Documents](https://splidejs.com/integration-react-splide/)

## Why? (https://github.com/Splidejs/splide/pull/296)
This temporary project fixes the "window is not defined" error when using SSR. When the original package is patched this package and repository will be deprecated.


### Install

```bash
npm i splide-nextjs --save
```
```bash
yarn add splide-nextjs
```

### Import

```bash
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
```
```bash
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
// or
import 'splide-nextjs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import 'splide-nextjs/splide/dist/css/themes/splide-skyblue.min.css';
```