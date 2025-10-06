export function caesarCipher(string, key) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let upperCaseAlphabets = alphabets.toUpperCase();
  const message = string.split("");

  const cipheredString = message.map((char) => {
    let index;

    if (char === char.toUpperCase() && upperCaseAlphabets.includes(char)) {
      index = alphabets.indexOf(char.toLowerCase());
      const upperCaseIndex = (key + index) % alphabets.length;
      return alphabets[upperCaseIndex].toUpperCase();
    }

    index = alphabets.indexOf(char);
    if (index === -1) return char;
    const lowerCaseIndex = (key + index) % alphabets.length;
    return alphabets[lowerCaseIndex];
  });

  return cipheredString.join("");
}
