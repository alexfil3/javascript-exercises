// Check the whole array if there is any equality
// If array item doesn't belong to args put it in a new array

const removeFromArray = function (array, ...arg) {
  return array.filter((item) => !arg.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
