const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("is expecting the count for 'Jason' in the object to be 1", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    let assertion = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    let expected = 1;
    assert.strictEqual(assertion["Jason"], expected);
  });
  it("is expecting the count for 'Fang' in the object to be 2", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    let assertion = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    let expected = 2;
    assert.strictEqual(assertion["Fang"], expected);
  });
  it("is expecting the return for 'Karima' to be undefined", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    let assertion = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    let expected = undefined;
    assert.strictEqual(assertion["Karima"], expected);
  });
});