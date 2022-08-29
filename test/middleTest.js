const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle()", () => {
  it("should return return [3] when checking middle([1,3,5])", () => {
    const expected = [3];
    const assertion = middle([1,3,5]);
    assert.deepEqual(assertion, expected);
  });
  it("should return [3,4] when checking middle([1,2,3,4,5,6)]", () => {
    const expected = [3,4];
    const assertion = middle([1,2,3,4,5,6]);
    assert.deepEqual(assertion, expected);
  });
});