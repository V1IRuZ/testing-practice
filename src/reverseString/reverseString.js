export function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("Only strings are accepted");
  }

  let result = [];

  for (let i = string.length - 1; i >= 0; i--) {
    result.push(string[i]);
  }

  return result.join("");
}
