var reverseString = function (str) {
  //  an empty string ("") is used as the separator, the string is split between each character.
  return str.split("").reverse().join("");
};


module.exports = reverseString;
