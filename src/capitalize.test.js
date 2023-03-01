const capitalize = require("./capitalize");

test("Capitalizes the first letter of the string", () => {
  expect(capitalize("test")).toBe("Test");
});

test("Capitalizes the first letter of the string", () => {
  expect(capitalize("TEST")).toBe("TEST");
});

test("Capitalizes the first letter of the string", () => {
  expect(capitalize("tEST")).toBe("TEST");
});

test("Capitalizes the first letter of the string", () => {
  expect(capitalize("TEST")).toBe("TEST");
});
