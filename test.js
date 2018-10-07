const assert = require('assert')
const Rand48 = require('./index.js')

it('should work', function () {
    const rng = new Rand48(1538857073237)
    assert.equal(rng.random(), 0.6400923397828205)
    assert.equal(rng.random(), 0.20170841895667824)
    assert.equal(rng.random(), 0.19708366795806354)
    assert.equal(rng.random(), 0.7711449869389728)
    assert.equal(rng.random(), 0.7308651738682106)
});