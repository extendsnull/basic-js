module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  if (date.toString !== Date.prototype.toString) {
    throw new Error();
  }

  const month = date.getMonth();

  if (month > 1 && month <= 4) {
    return 'spring';
  } else if (month > 4 && month <= 7) {
    return 'summer';
  } else if (month > 7 && month <= 10) {
    return 'autumn';
  } else {
    return 'winter';
  }
};
