module.exports = function countCats(backyard) {
  return backyard.flat().filter(item => item === '^^').length;
};
