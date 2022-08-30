const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  
  if (array1.length !== array2.length) {
    return false;
  }
  
  if (array1 === null || array2 === null) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  
  for (let value of obj1Keys) {
    if (Array.isArray(obj1[value]) && Array.isArray(obj2[value])) {
      if (!eqArrays(obj1[value],obj2[value])) {
        console.log('eqArray is returning false');
        return false;
      }
    } else if (obj1[value] !== obj2[value]) {
      return false;
    }
  }
  return true;
};

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Passed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};