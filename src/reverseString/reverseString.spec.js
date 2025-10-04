import { reverseString } from "./reverseString.js";

describe("reverseString function", () => {
  test("accepts string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("accepts different strings", () => {
    expect(reverseString("Greetings")).toBe("sgniteerG");
  });

  test.each([3, ["a", "b", "c"], { name: "John" }, null, undefined])(
    "accepts only strings (%p)",
    (input) => {
      expect(() => reverseString(input)).toThrow("Only strings are accepted");
    },
  );

  test("accepts empty strings", () => {
    expect(reverseString("")).toBe("");
  });

  test("accepts long strings", () => {
    expect(reverseString("this string is a sentence")).toBe(
      "ecnetnes a si gnirts siht",
    );
  });

  test("works strings with numbers", () => {
    expect(reverseString("h3ll0")).toBe("0ll3h");
  });
});
