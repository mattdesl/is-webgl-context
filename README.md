# is-webgl-context

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Test whether the given object is a WebGL or WebGL2 context. This is useful to handle edge-cases, such as when [Chrome WebGL Inspector](https://chrome.google.com/webstore/detail/webgl-inspector/ogkcjmbhnfmlnielkjhedpcjomeaghda?hl=en) wraps WebGLRenderingContext in a different type. 

Runs in Node and the browser.

```js
var isGL = require('is-webgl-context')

isGL(foo)
```

## Usage

[![NPM](https://nodei.co/npm/is-webgl-context.png)](https://nodei.co/npm/is-webgl-context/)

#### `isGLContext(obj)`

Returns true if the object is an instance of WebGL[2]RenderingContext, handling edge cases for WebGL debuggers/inspectors. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/is-webgl-context/blob/master/LICENSE.md) for details.
