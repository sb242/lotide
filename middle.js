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

const middle = function(array) {
  let middleArray = [];
  let middleIndex = 0;
  if (array.length === 1 || array.length === 2) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    middleIndex = array.length / 2;
    middleArray.push(array[middleIndex - 1]);
    middleArray.push(array[middleIndex]);
    return middleArray;
  } else {
    middleIndex = Math.floor(array.length / 2);
    middleArray.push(array[middleIndex]);
    return middleArray;
  }

};

let a1 = [1,2,3,4,5];
console.log(middle(a1));