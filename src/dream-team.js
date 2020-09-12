module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    && members.reduce((accumulator, current) => {
        if (typeof current === 'string') {
          accumulator.push(current.trim().charAt(0).toUpperCase())
        }

        return accumulator;
      }, [])
      .sort()
      .join('');
};
