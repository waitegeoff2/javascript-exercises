const palindromes = function (string) {

const lettersNum = "abcdefghijklmnopqrstuvwxyz0123456789";

// remove punctuation and make lower case and make the first string
const cleanString = string
    .toLowerCase()
    .split("")
    .filter((item) => lettersNum.includes(item))
    .join("");

// split into array, reverse array, join array to make second string
const reverseString = cleanString
    .split("")
    .reverse()
    .join("");

// compare both strings

if (cleanString == reverseString) { 
return true;    
} else {
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;
