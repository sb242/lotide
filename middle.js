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

module.exports = middle;