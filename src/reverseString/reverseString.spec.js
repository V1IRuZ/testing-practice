import { reverseString } from "./reverseString.js";

describe("reverseString function", () => {
  test("accepts string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
});
