const calculator = require("./calculator");

test("adds numbers together", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("adds numbers together", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("adds numbers together", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("adds numbers together", () => {
  expect(calculator.divide(16, 4)).toBe(4);
});
