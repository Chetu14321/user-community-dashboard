function findCommonMembers(arr1, arr2) {
  const set = new Set(arr1);
  return arr2.filter(id => set.has(id));
}

module.exports = findCommonMembers;
