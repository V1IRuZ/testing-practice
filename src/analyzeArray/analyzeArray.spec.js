import { analyzeArray } from "./analyzeArray.js";

describe("analyzeArray function", () => {
  test("returns the average of an array in an object", () => {
    expect(analyzeArray([2, 3, 5, 6, 9]).average).toBe(5);
  });
});
