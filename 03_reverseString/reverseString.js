const reverseString = function(word) {
let splitWord = word.split("");
let reverseArray = splitWord.reverse();
let joinArray = reverseArray.join("");

return joinArray;
};

reverseString("hello");

reverseString("hello there");

reverseString('123! abc! Hello, Odinite.');

reverseString("");

// Do not edit below this line
module.exports = reverseString;
