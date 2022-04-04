const add = function(a , b) {
  let result = a + b;
  return result;
	
};

const subtract = function(a, b) {
	let result = a - b;
  return result;

};

const sum = function(array) {
  let i = 0;
  let result = 0;
	while(i < array.length) {
    result += array[i]
    i++;
  }
  return result;
};

const multiply = function(array) {
  let i = 0;
  let result = 1;
  while(i < array.length) {
    result *= array[i];
    i++;
  }
  return result;
};

const power = function(a , b) {
  let result = Math.pow(a, b)
  return result;
};

const factorial = function(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
