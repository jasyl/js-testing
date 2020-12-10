const isPangram = function(text) {
  if (text === "" || text.length < 26) return false
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ,'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for(const i in alphabet) {
    if (!text.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}

module.exports = isPangram;
