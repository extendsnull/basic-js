module.exports = function repeater(str, options) {
  const {
    repeatTimes,
    separator = '+',
    addition = '',
    additionRepeatTimes,
    additionSeparator = '|',
  } = options;

  return Array(repeatTimes).fill(String(str)).map(item => {
    return item + Array(additionRepeatTimes)
      .fill(String(addition))
      .join(additionSeparator);
  }).join(separator);
};
