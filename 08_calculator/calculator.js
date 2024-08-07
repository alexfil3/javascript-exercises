const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((acc, num) => acc + num, 0);
};

const multiply = function (array) {
  return array.reduce((acc, num) => acc * num);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let factorial = 1;

  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
