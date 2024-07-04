const convertToCelsius = function (fah) {
  const cel = Number(((fah - 32) / 1.8).toFixed(1));

  return cel;
};

const convertToFahrenheit = function (cel) {
  const fah = Number(((cel * 9) / 5 + 32).toFixed(1));

  return fah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
