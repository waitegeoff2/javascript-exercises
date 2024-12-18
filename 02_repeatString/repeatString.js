const repeatString = function(textRepeat, numRepeat) {
if (numRepeat < 0) return "ERROR";
let string = ""
for (let i = 0; i < numRepeat; i++) {
string += textRepeat;
}
return string;
};

repeatString('', 10);



// Do not edit below this line
module.exports = repeatString;
