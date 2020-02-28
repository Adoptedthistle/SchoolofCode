//require function from index.js
//write tests on that function

const { twoOldestAges } = require("./index.js");

test("function does something", () => {
  const expected = [8, 10];
  const actual = twoOldestAges([1, 2, 10, 8]);
  expect(actual).toStrictEqual(expected);
});

//negative numbers

test("function filters negative numbers", () => {
  const expected = [7];
  const actual = twoOldestAges([-1, -2, -10, -8, 7]);
  expect(actual).toStrictEqual(expected);
});

//nit.skip("tests negative numbers", () => {});

//return string
