export function analyzeArray(array) {
  const average = array.reduce((sum, num) => sum + num, 0) / array.length;

  return {
    average
  }
}
