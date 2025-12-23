const findCommonMembers = require("../utils/findCommonMembers");

test("common members exist", () => {
  expect(findCommonMembers([1, 2], [2, 3])).toEqual([2]);
});

test("no common members", () => {
  expect(findCommonMembers([1], [3])).toEqual([]);
});

test("empty arrays", () => {
  expect(findCommonMembers([], [])).toEqual([]);
});
