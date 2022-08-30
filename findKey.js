const findKey = (object, callback) => {
  for(item in object) {
    if(callback(object[item])) {
      return item;
    }
  }
  return undefined;
}

module.exports = findKey;