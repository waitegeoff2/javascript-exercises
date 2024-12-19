const convertToCelsius = function(tempFah) {
  let rawCelsius = (tempFah - 32) * (5/9);

  let roundedCelsius = Math.round(rawCelsius * 10) / 10;
  
  return roundedCelsius;
};

const convertToFahrenheit = function(tempCel) {
  const rawFahrenheit = (tempCel * (9/5) + 32);
  const roundedFahrenheit = Math.round(rawFahrenheit * 10)/10;
  return roundedFahrenheit;
};

convertToCelsius(32);

convertToCelsius(100);

convertToCelsius(-100);

convertToFahrenheit(0);

convertToFahrenheit(73.2);

convertToFahrenheit(-10);



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
