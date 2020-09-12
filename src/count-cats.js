module.exports = function countCats(backyard) {
  return backyard.reduce((accumulator, current) => {
    return accumulator += current.filter(item => item === '^^').length;
  }, 0);
};
