import { calculator } from "./calculator.js";

describe("Calculator", () => {
  describe("add method", () => {
    test("adds two numbers", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test("adds another two numbers", () => {
      expect(calculator.add(323, 241)).toBe(564);
    });

    test("adds floating numbers", () => {
      expect(calculator.add(0.5, 0.3)).toBeCloseTo(0.8);
    });

    test.each(["abc", [2, 3], null, undefined, true])(
      "first invalid input throws error (%p)",
      (input) => {
        expect(() => calculator.add(input, 4)).toThrow(
          "Only numbers are accepted",
        );
      },
    );

    test.each(["abc", [2, 3], null, undefined, true])(
      "second invalid input throws error (%p)",
      (input) => {
        expect(() => calculator.add(3, input)).toThrow(
          "Only numbers are accepted",
        );
      },
    );

    test("accepts negative numbers", () => {
      expect(calculator.add(-2, -5)).toBe(-7);
    });

    test("accepts infinity", () => {
      expect(calculator.add(Infinity, 4)).toBe(Infinity);
    });

    test("throws error on NaN", () => {
      expect(() => calculator.add(NaN, NaN)).toThrow(
        "Only numbers are accepted",
      );
    });
  });

  describe("subtract method", () => {
    test("substracts two numbers", () => {
      expect(calculator.subtract(9, 5)).toBe(4);
    });

    test("works with floating numbers", () => {
      expect(calculator.subtract(0.3, 0.2)).toBeCloseTo(0.1);
    });

    test("works with negative numbers", () => {
      expect(calculator.subtract(-3, -7)).toBe(4);
    });

    test("works with infinity", () => {
      expect(calculator.subtract(Infinity, 52)).toBe(Infinity);
    });
  });
});
