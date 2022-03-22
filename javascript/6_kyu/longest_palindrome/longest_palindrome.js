function longestPalindrome(string) {
  if (string === '' || !string) return 0;
  const palindromes = [];

  for (let i = 0; i < string.length; i += 1) {
    for (let j = i + 1; j <= string.length; j += 1) {
      const substring = string.substring(i, j);
      console.log(substring)
      if (isPalindrom(substring)) palindromes.push(substring);
    }
  }

  console.log(palindromes)
  const longestPalindrome = palindromes.reduce((longestWord, word) => {
    console.log(word)
    console.log(longestWord)
    if (longestWord.length > word.length) return longestWord;
    return word;
  }, ' ');
  
  return longestPalindrome.length;
}

function isPalindrom(substring) {
  const reversedSubstring = substring.split('').reverse().join('');
  return substring === reversedSubstring
}

console.log(longestPalindrome('zzbaabcd'));