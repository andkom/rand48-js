# rand48.js

A rand48 random number generator implementation in pure JavaScript.

It's a default random number generator in Java. Also it was used in old versions of Firefox and other browsers. 

Not cryptographically strong!

## Install

```bash
npm install rand48.js
```

## Use

```javascript
const Rand48 = require('rand48.js')

console.log(new Rand48().random())
```