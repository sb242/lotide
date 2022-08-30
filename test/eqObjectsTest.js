const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("is expecting two of the same objects to be equal)", () => {
    let assertion = eqObjects({creature: "dragon", height: 200}, {creature: "dragon", height: 200});
    let expected = true;
    assert.strictEqual(assertion, expected);
  });

  it("it is expecting two of the same objects to be equal with nested objects", () => {
    let assertion = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    let expected = true;
    assert.strictEqual(assertion, expected);
  });
});