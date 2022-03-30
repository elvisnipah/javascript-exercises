const repeatString = function(string, num) {
    let finalString = "";
    let i = 0;
    while (i < num) {
        finalString += string;
        i++;
    }
    if (num < 0) {
        finalString += "ERROR";
    };
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
