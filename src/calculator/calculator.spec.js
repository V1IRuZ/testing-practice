import { calculator } from "./calculator.js";

describe("Calculator", () => {
  describe("add method", () => {
    test("adds two number", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test("adds anothe two number", () => {
      expect(calculator.add(323, 241)).toBe(564);
    });
  });
});
