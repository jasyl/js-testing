const isPalindrome = function (text) {

  const str = text.toLowerCase();
  let j;
  for(let i = 0, j = str.length -1; i <= j; i++, j--) {
    if (str[i] != str[j]) return false
  }
  return true;
};

module.exports = isPalindrome;

