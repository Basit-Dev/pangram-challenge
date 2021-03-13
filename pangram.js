export const isPangram = sentence => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
  let toLower = sentence.toLowerCase();
  let isContain = false;
  for (let i = 0; i < alphabet.length; i++) {
    if (toLower.includes(alphabet[i])) {
      isContain = true;
    } else {
      isContain = false;
      break;
    }
  }
  return isContain;
};
