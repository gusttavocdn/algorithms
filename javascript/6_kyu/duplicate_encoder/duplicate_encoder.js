function duplicateEncode(word) {
  const standard_word = word.toLowerCase();
  let final_string = '';
  let letter;
  
  for (let i = 0; i < standard_word.length; i++) {
    let letter_count = 0;
    
    letter = standard_word[i];
    for (let j = 0; j < standard_word.length; j++) {
      if (letter == standard_word[j]) letter_count++;
    }

    letter_count == 1 ? final_string+= '(' : final_string+= ')';
  }

  return (final_string);
}

console.log(duplicateEncode("Gustavo da Silva Amaral Santos"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));