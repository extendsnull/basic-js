const SECONDS_IN_HOUR = 3600;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor((SECONDS_IN_HOUR / turnsSpeed) * turns);
  
  return { turns, seconds };
};
