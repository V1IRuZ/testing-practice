import { capitalize } from "./capitalize.js";

describe("Capitalize function", () => {
  test("accepts string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });

  test("accepts another sting", () => {
    expect(capitalize("greetings!")).toBe("Greetings!");
  });

  test("accepts empty strings", () => {
    expect(capitalize("")).toBe("");
  });

  test("accepts only strings", () => {
    expect(() => capitalize(5)).toThrow("Only strings are accepted");
  });

  test("accepts still only strings", () => {
    expect(() => capitalize(["a", "b", "c"])).toThrow("Only strings are accepted");
  });
});
