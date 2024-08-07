const fibonacci = function (num) {
  const number = Number(num);

  if (number === 0) return 0;
  if (number < 0) return "OOPS";

  let prev = 0;
  let fibonacci = 1;

  for (let i = 2; i <= number; i++) {
    let current = prev + fibonacci;
    prev = fibonacci;
    fibonacci = current;
  }

  return fibonacci;
};

// Do not edit below this line
module.exports = fibonacci;
