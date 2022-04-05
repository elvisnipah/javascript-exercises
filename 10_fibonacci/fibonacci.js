const fibonacci = function(num) {
    if (num >= 0) {
        let realNum = parseInt(num);
        let n1 = 1, n2 = 1, nextTerm;

        for(i = 1; i <= realNum - 1; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
        return n1;
    }

    else {
        let error = "OOPS";
        return error;
    }
};

// Do not edit below this line
module.exports = fibonacci;
