export function analyzeArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

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
