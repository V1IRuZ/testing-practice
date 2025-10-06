export function caesarCipher(string, shiftFactor) {
  return string
    .split("")
    .map((char) => cipherCharacter(char, shiftFactor))
    .join("");
}

function cipherCharacter(character, shiftFactor) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let index;
  let newIndex;

  if (!alphabets.includes(character.toLowerCase())) {
    return character;
  }

  if (alphabets.includes(character)) {
    index = alphabets.indexOf(character);
    newIndex = (shiftFactor + index) % alphabets.length;
    return alphabets[newIndex];
  }

  index = alphabets.indexOf(character.toLowerCase());
  newIndex = (shiftFactor + index) % alphabets.length;
  return alphabets[newIndex].toUpperCase();
}
