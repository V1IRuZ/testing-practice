export const calculator = {
  add(a, b) {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      Number.isNaN(a) ||
      Number.isNaN(b)
    ) {
      throw new Error("Only numbers are accepted");
    }
    return a + b;
  },
  subtract(a, b) {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      Number.isNaN(a) ||
      Number.isNaN(b)
    ) {
      throw new Error("Only numbers are accepted");
    }
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};
