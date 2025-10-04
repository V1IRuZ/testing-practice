import { capitalize } from "./capitalize.js";

describe("Capitalize function", () => {
  test("accepts string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });
});
