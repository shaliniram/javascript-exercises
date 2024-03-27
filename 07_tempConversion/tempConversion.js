const convertToCelsius = function(far) {
  let num = 5/9*(far-32);
  
  return( Math.round(num * 10) / 10);
};

const convertToFahrenheit = function(cel) {

  let num = (9/5 * cel) + 32;
  
  return( Math.round(num * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
