import { caesarCipher } from "./caesarCipher.js";

describe("caesarCipher function", () => {
  test("encrypts string", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
  });

  test("works with various of words", () => {
    expect(caesarCipher("secret", 3)).toBe("vhfuhw");
  });

  test("works with wrap around", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
});
