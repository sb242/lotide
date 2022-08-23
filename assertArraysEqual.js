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

const assertArraysEqual = function(result, array1, array2) {
  if (result === true) {
    console.log(`🟢 The arrays match: ${array1} === ${array2}`);
  } else {
    console.log(`🔴 The arrays do not match: ${array1} !== ${array2}`);
  }
};

let a1 = [1,2,3];
let a2 = [1,2,3,4];
assertArraysEqual(eqArrays(a1, a2), a1, a2);