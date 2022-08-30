const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("is expecting 'drama' to be equal to findKeyByValue(bestTVShowsByGenre, 'The Wire')", () => {
    const bestTVShowsByGenre = { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" };
    let assertion = findKeyByValue(bestTVShowsByGenre, "The Wire");
    let expected = "drama";
    assert.strictEqual(assertion, expected);
  });
});