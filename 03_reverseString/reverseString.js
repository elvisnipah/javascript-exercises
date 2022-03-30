const reverseString = function(str) {
    const splitString = str.split("");
    splitString.reverse();
    let newString = splitString.join("");
    return newString;
};
// Do not edit below this line
module.exports = reverseString;
