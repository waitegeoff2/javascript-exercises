const fibonacci = function(number) {
    if (typeof number === 'string') {
        fibNumber = parseInt(number);
    } else {
        fibNumber = number;
    }
    
    if (fibNumber < 0) {
        return "OOPS";

    } else if (fibNumber == 0) {
        return 0;

    } else if (fibNumber > 0) {

        let numOne = 0;
        let numTwo = 1;

        for (i = 2; i <= number; i++) {
            let current = numOne + numTwo;

            // next time it runs on these two numbers
            numOne = numTwo;
            numTwo = current;
        };

        return numTwo;

    }

    

};

// Do not edit below this line
module.exports = fibonacci;
