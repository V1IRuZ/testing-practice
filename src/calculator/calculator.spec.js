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
  });
});
