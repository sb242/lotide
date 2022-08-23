const without = function(array, remove) {
  let without = [];
  
  for(let i = 0; i < array.length; i++) { //assigns array to without
    without.push(array[i]);
  }

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < remove.length; j++) {
      if(without[i] === remove[j]) {
        without.splice(i,1);
      }
    }
  }
  return without;
}

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

console.log(without([1, 2, 3, 5, 7], [1, 2, 3, 4])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "2", "3"])) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);