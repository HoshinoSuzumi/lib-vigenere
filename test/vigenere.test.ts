import { describe, it, expect } from "vitest";
import { encrypt, decrypt } from "../src";

describe("Vigenere Cipher", () => {
  it("should encrypt and decrypt text", () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const text = "CTFever @ Vigenere Cipher Test";
    const key = alphabet.split("").sort(() => Math.random() - 0.5).slice(0, 6).join("");
    
    const encrypted = encrypt(text, key);
    const decrypted = decrypt(encrypted, key);

    console.log(key);
    console.log(encrypted);
    console.log(decrypted);

    expect(decrypted).toBe(text.toUpperCase());
  });
});
