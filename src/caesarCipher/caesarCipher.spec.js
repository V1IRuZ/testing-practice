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

  test.each([26, 0, -1, 99])(
    "throws an error if shift factor is out of range (%p)",
    (invalidShift) => {
      expect(() => caesarCipher("error", invalidShift)).toThrow(
        "Shift factor must be between 1 and 25.",
      );
    },
  );

  test.each(["3", null, NaN, [3]])(
    "throws an error if shift factor is not number (%p)",
    (invalidShift) => {
      expect(() => caesarCipher("error", invalidShift)).toThrow(
        "Shift factor must be a number.",
      );
    },
  );

  test.each([5, null, ["hello"]])(
    "throws an error if first input is not string (%p)",
    (invalidString) => {
      expect(() => caesarCipher(invalidString, 3)).toThrow(
        "Ciphered message must be a string.",
      );
    },
  );
});
