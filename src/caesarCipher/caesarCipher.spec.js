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

  test("accepts characters other than just the alphabets", () => {
    expect(caesarCipher("oh, hello there!", 3)).toBe("rk, khoor wkhuh!");
  });

  test("works with uppercase and lowercase letters", () => {
    expect(caesarCipher("seRioUsLy!?", 3)).toBe("vhUlrXvOb!?");
  });

  test("works with different shift factors", () => {
    expect(caesarCipher("Message!", 5)).toBe("Rjxxflj!");
  });
});
