const flatten = function(array) {
  let flattened = [];
  
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattened.push(array[i][j]);
      }
    } else {
      flattened.push(array[i]);
    }
  }

  return flattened;
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢 The arrays match: ${array1} === ${array2}`);
  } else {
    console.log(`🔴 The arrays do not match: ${array1} !== ${array2}`);
  }
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));