const palindromes = function (str) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanedStr = str
    .toLowerCase()
    .split("")
    .filter((item) => alphanumerical.includes(item))
    .join("");

  const reversedStr = cleanedStr.split("").reverse().join("");

  return reversedStr === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
