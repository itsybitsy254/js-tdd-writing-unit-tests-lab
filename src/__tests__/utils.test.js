// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("mom")).toBe(true);
    expect(isPalindrome("Aibohphobia")).toBe(true); // Bonus: Case-insensitive
  });

  it("returns false for non-palindromes", () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
  });

  it("handles uppercase and lowercase letters", () => {
    expect(isPalindrome("Racecar")).toBe(true); // Bonus: Case-insensitive
    expect(isPalindrome("MadAm")).toBe(true); // Bonus: Case-insensitive
  });
  it("throws an error if input contains non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar123")).toThrow("Input must only contain alphabetic characters.");
    expect(() => isPalindrome("hello!")).toThrow("Input must only contain alphabetic characters.");
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string.");
    expect(() => isPalindrome([])).toThrow("Input must be a string.");
    expect(() => isPalindrome({})).toThrow("Input must be a string.");
  });
});

