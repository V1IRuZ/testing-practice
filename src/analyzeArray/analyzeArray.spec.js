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

  test("returns object with average, min, max and length properties", () => {
    expect(analyzeArray([2, 3, 5, 6, 9])).toEqual({
      average: 5,
      min: 2,
      max: 9,
      length: 5,
    });
  });

  test("works with various arrays", () => {
    expect(analyzeArray([5, 11, 4, 1, 7, 8])).toEqual({
      average: 6,
      min: 1,
      max: 11,
      length: 6,
    });
  });
});
