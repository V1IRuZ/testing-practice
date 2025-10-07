import { analyzeArray } from "./analyzeArray.js";

describe("analyzeArray function", () => {
  test("returns the average of an array in an object", () => {
    expect(analyzeArray([2, 3, 5, 6, 9]).average).toBe(5);
  });

  test("returns the minimum value from an array", () => {
    expect(analyzeArray([5, 7, 4, 23, 2, 9]).min).toBe(2);
  });

  test("returns the maximum value from an array", () => {
    expect(analyzeArray([34, 29, 87, 239, 41]).max).toBe(239);
  });

  test("returns the length of the array", () => {
    expect(analyzeArray([2, 53, 12, 54, 76, 9, 21]).length).toBe(7);
  });
});
