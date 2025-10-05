export function caesarCipher(string, key) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const message = string.split("");

  const cipheredString = message.map((char) => {
    let index = alphabets.indexOf(char) + key;

    const newIndex = (alphabets.length + index) % alphabets.length

    return alphabets[newIndex];
  });

  return cipheredString.join("");
}
