export const calculator = {
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Only numbers are accepted");
    }
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};
