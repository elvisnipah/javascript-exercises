const palindromes = function (text) {
    let str = text.toLowerCase();
    str = str.replace(/[^a-zA-Z0-9]/g, '');
    let splitString = str.split("");
    var reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    if(joinArray === str) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
