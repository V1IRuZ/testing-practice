function cipherCharacter(character, shiftFactor) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const isUpperCase = character === character.toUpperCase();
  const lowerCaseChar = character.toLowerCase();

  if (!alphabets.includes(lowerCaseChar)) return character;

  const index = alphabets.indexOf(lowerCaseChar);
  const newIndex = (shiftFactor + index) % alphabets.length;
  const shiftedChar = alphabets[newIndex];

  return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
}

function validateShiftFactor(shiftFactor) {
  const minRange = 1;
  const maxRange = 25;

  if (typeof shiftFactor !== "number" || Number.isNaN(shiftFactor)) {
    throw new Error("Shift factor must be a number.");
  }

  if (shiftFactor < minRange || shiftFactor > maxRange) {
    throw new Error("Shift factor must be between 1 and 25.");
  }
}

export function caesarCipher(string, shiftFactor) {
  validateShiftFactor(shiftFactor);

  return string
    .split("")
    .map((char) => cipherCharacter(char, shiftFactor))
    .join("");
}
