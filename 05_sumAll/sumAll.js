const sumAll = function(first, second) {

if (first<0) return "ERROR";
if (second < 0) return "ERROR";
if (first%1 != 0) return "ERROR";
if (second%1 !=0) return "ERROR";


if (!Number.isInteger(first)) return "ERROR";
if (!Number.isInteger(second)) return "ERROR";

if(second>=first) {

    let sum = 0;

    for (let i=first; i<=second; i++) {
    sum += i;
}
return sum;
} else {
    let sum = 0;

    for (let i=second; i<=first; i++) {
        sum += i;
    }
    return sum; 
}
};

sumAll(1, 4000);

sumAll(123,1);

sumAll(-10, 4);

sumAll(2.5,4);

sumAll(10, "90");

sumAll(10, [90, 1]);



// Do not edit below this line
module.exports = sumAll;


//
// 
