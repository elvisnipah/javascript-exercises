const sumAll = function(num1, num2) {
    let sum = 0;
    if (num2 < 0 || num1 < 0 || typeof num1 !== "number" || typeof num2 !== "number"){
        return sum = "ERROR";
    }
    else if (num1 < num2) {
        i = num1;
        while(i <= num2) {
            sum += i;
            i++;
        }
    }
    else if (num2 < num1) {
        i = num2;
        while(i <= num1) {
            sum += i;
            i++;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
