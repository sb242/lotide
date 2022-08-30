const eqArrays = require("./eqArrays");

const eqObjects = function(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) { //comparing both obj lengths
    return false;
  }
  
  for (let value of obj1Keys) {
    if (Array.isArray(obj1[value]) && Array.isArray(obj2[value])) { //checking if both obj values are arrays and comparing arrays
      if (!eqArrays(obj1[value],obj2[value])) {
        return false;
      }
    } 
    if(typeof obj1[value] === 'object' && typeof obj2[value] === 'object') {
      return eqObjects(obj1[value], obj2[value]);
    }

    if (obj1[value] !== obj2[value]) { //
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;