function validateArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  if (array.length <= 0) {
    throw new Error("Array cannot be empty");
  }

  const allNumbers = array.every(
    (item) => typeof item === "number" && !Number.isNaN(item),
  );

  if (!allNumbers) {
    throw new Error("Each element of the array must be a number");
  }
}

export function analyzeArray(array) {
  validateArray(array);
  const average = array.reduce((sum, num) => sum + num, 0) / array.length;

  const min = array.reduce(
    (lowest, current) => (lowest < current ? lowest : current),
    array[0],
  );

  const max = array.reduce(
    (highest, current) => (highest > current ? highest : current),
    array[0],
  );

  const length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
}
