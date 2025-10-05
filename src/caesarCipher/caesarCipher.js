export function caesarCipher(string, key) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const message = string.split("");

  const cipheredString = message.map((char) => {
    let index = alphabets.indexOf(char);
    if(index === -1) return char;

    const newIndex = (key + index) % alphabets.length

    return alphabets[newIndex];
  });

  return cipheredString.join("");
}
