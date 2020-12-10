const isPalindrome = require('../src/is_palindrome');

describe('isPalindrome()', () => {

  test('isPalindrome() is defined', () => {
    expect(isPalindrome).toBeDefined();
  });

  test('works with a lowercase single word palindrome', () => {
    const text = 'ada';
    const result = isPalindrome(text);
    expect(result).toBeTruthy();
  });

  test('works with upper and lowercase letters', () => {
    const text = 'Ada';
    const result = isPalindrome(text);
    expect(result).toBeTruthy();
  });

  test('returns false if word is not a palindrome', () => {
    const text = 'hello';
    const result = isPalindrome(text);
    expect(result).toBeFalsy();
  });

});