export function caesarCipher(string, key) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const message = string.split("");

  const cipheredString = message.map(char => {
    let index = alphabets.indexOf(char) + key;
    return alphabets[index];
  })

  return cipheredString.join("");
}
