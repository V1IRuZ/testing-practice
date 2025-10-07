export function analyzeArray(array) {
  const average = array.reduce((sum, num) => sum + num, 0) / array.length;

  const min = array.reduce(
    (lowest, current) => (lowest < current ? lowest : current),
    array[0],
  );

  return {
    average,
    min,
  };
}
