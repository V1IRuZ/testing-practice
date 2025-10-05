export const calculator = {
  _validateInput(a, b) {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      Number.isNaN(a) ||
      Number.isNaN(b)
    ) {
      throw new Error("Only numbers are accepted");
    }
  },

  add(a, b) {
    this._validateInput(a, b);
    return a + b;
  },

  subtract(a, b) {
    this._validateInput(a, b);
    return a - b;
  },

  divide(a, b) {
    if (a === 0 && b === 0) {
      throw new Error("You cannot divide zero by zero");
    }
    this._validateInput(a, b);
    return a / b;
  },

  multiply(a, b) {
    this._validateInput(a, b);
    return a * b;
  },
};
