const sequences = [
  '--discard-next',
  '--discard-prev',
  '--double-next',
  '--double-prev',
];

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  return arr.reduce((accumulator, item, index) => {
    if (sequences.includes(item)) {
      return accumulator;
    }

    const prev = arr[index - 1];
    const next = arr[index + 1];

    if (prev === sequences[0]) {
      return accumulator;
    }

    if (prev === sequences[2]) {
      accumulator.push(item, item);
    } else {
      accumulator.push(item);
    }

    if (next === sequences[1]) {
      accumulator.pop();
    }

    if (next === sequences[3]) {
      accumulator.push(item);
    }

    return accumulator;
  }, []);
};
