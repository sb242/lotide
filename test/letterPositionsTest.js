const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("is expecting for 'hello'.l to return [2, 3]", () => {
    let assertion = letterPositions("hello").l
    let expected = [2, 3];
    assert.deepEqual(assertion, expected);
  });
});