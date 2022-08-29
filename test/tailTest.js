const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail()", () => {
  it("should return true when checking if tail returns everything but the first element(The 'tail' of the array)", () => {
    const expected = 2;
    const assertion = tail(["Hello","Lighthouse","Labs"]).length;
    assert.strictEqual(assertion, expected);
  });

  it("should return 'Lighthouse' when checking tail(['Hello', 'Lighthouse', 'Labs'])[0]", () => {
    const expected = 'Lighthouse';
    const assertion = tail(["Hello","Lighthouse","Labs"])[0];
    assert.strictEqual(assertion, expected);
  });
});