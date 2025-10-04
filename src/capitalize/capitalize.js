export function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error("Only strings are accepted");
  }

  if (string.length === 0) return "";
  
  return string[0].toUpperCase() + string.slice(1);
}
