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

export function caesarCipher(string, shiftFactor) {
  return string
    .split("")
    .map((char) => cipherCharacter(char, shiftFactor))
    .join("");
}
