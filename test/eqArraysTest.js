const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("is expecting two of the same array to be equal)", () => {
    let assertion = eqArrays([1, 2, 3], [1, 2, 3]);
    let expected = true;
    assert.strictEqual(assertion, expected);
  });

  it("is expecting two different array to be not equal, return false)", () => {
    let assertion = eqArrays([3, 2, 3], [1, 2, 3]);
    let expected = false;
    assert.strictEqual(assertion, expected);
  });
});