const reverseString = require("./reverseString");

test("reverses string", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test("reverses string", () => {
  expect(reverseString("get a grip")).toBe("pirg a teg");
});

test("reverses string", () => {
  expect(reverseString("WooWw")).toBe("wWooW");
});
