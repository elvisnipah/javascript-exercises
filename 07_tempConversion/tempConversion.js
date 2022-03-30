const ftoc = function(fahrenheit) {
  let answer = 0;
  answer = (fahrenheit - 32) * 5/9;
  return parseFloat(answer.toFixed(1));

};

const ctof = function(celsius) {
  let answer = 0;
  answer = (celsius * 9/5) + 32;
  return parseFloat(answer.toFixed(1));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
