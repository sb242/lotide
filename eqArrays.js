const eqArrays = function(array1, array2) {
  
  if (array1.length !== array2.length) {
    return false;
  }
  
  if (array1 === null || array2 === null) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if(Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if(!eqArrays(array1[i], array2[i])){
        return false;
      };
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false