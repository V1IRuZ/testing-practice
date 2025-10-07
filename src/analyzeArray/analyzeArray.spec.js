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

  test("works with a single-element array", () => {
    expect(analyzeArray([987])).toEqual({
      average: 987,
      min: 987,
      max: 987,
      length: 1,
    });
  });

  test("works with floating point numbers", () => {
    expect(analyzeArray([5.2, 10, 2.4, 4]).average).toBeCloseTo(5.4);
  });

  test("works with negative numbers", () => {
    expect(analyzeArray([2, -1, 4, 3])).toEqual({
      average: 2,
      min: -1,
      max: 4,
      length: 4,
    });
  });

  test.each([null, 3, { num: 3 }, "array"])(
    "throws an error for invalid input (%p)",
    (input) => {
      expect(() => analyzeArray(input)).toThrow("Input must be an array");
    },
  );

  test("throws an error for empty array", () => {
    expect(() => analyzeArray([])).toThrow("Array cannot be empty");
  });

   test("throws an error for invalid array elements", () => {
    expect(() => analyzeArray([23, 21, 5, "hello", 98])).toThrow("Each element of the array must be a number");
  });
});
