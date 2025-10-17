const genVigenereCipherTable = () => {
  let results: string[][] = [];
  const charCode_A = "A".charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    let line: string[] = [];
    for (let j = 0; j < 26; j++) {
      let char = String.fromCharCode(charCode_A + ((i + j) % 26));
      line = [...line, char];
    }
    results = [...results, line];
  }
  return results;
};

const CIPHER_TABLE = Object.freeze(genVigenereCipherTable());

const encrypt = (text: string, key: string): string => {
  let result = "";
  text = text.toUpperCase();
  key = key.toUpperCase().replace(/[^A-Z]/g, "");

  if (key.length === 0) {
    throw new Error("Key must contain at least one letter");
  }

  let i = 0;
  for (let char of text) {
    if (!/[A-Z]/.test(char)) {
      result += char;
      continue;
    }
    const keyChar = key[i % key.length];
    const row = keyChar.charCodeAt(0) - "A".charCodeAt(0);
    const col = char.charCodeAt(0) - "A".charCodeAt(0);
    result += CIPHER_TABLE[row][col];
    i++;
  }
  return result;
};

const decrypt = (text: string, key: string): string => {
  let result = "";
  text = text.toUpperCase();
  key = key.toUpperCase().replace(/[^A-Z]/g, "");

  if (key.length === 0) {
    throw new Error("Key must contain at least one letter");
  }

  let i = 0;
  for (let char of text) {
    if (!/[A-Z]/.test(char)) {
      result += char;
      continue;
    }
    const keyChar = key[i % key.length];
    const row = keyChar.charCodeAt(0) - "A".charCodeAt(0);
    const col = CIPHER_TABLE[row].indexOf(char);
    result += String.fromCharCode(col + "A".charCodeAt(0));
    i++;
  }
  return result;
};

export { encrypt, decrypt };
