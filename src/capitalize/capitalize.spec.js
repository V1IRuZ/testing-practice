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

  test.each([5, ["a", "b", "c"], { a: "hello" }, null, undefined, false])(
    "throws error if input is not a string (%p)",
    (input) => {
      expect(() => capitalize(input)).toThrow("Only strings are accepted");
    },
  );

  test("works when a space is the first character in the string", () => {
    expect(capitalize(" empty")).toBe(" empty");
  });

  test("accepts strings that already start with an uppercase letter", () => {
    expect(capitalize("Hello!")).toBe("Hello!");
  });

  test("accepts string with one chracter", () => {
    expect(capitalize("e")).toBe("E");
  });
});
