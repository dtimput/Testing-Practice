function reverseString(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let letter = string.charAt(string.length - 1 - i);
    newString = newString + letter;
  }
  return newString;
}

module.exports = reverseString;
