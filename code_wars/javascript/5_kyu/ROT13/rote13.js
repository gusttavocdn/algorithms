function rot13(message) {
  const newString = new Array(message.length).fill('');

  for (let i = 0; i < message.length; i += 1) {
    const charCode = message.charCodeAt(i);
    if ((charCode > 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      if ((charCode > 109 && charCode <= 122) || (charCode >= 77 && charCode <= 90)) {
        newString[i] = String.fromCharCode(charCode - 13);
        continue;
      }
      newString[i] = String.fromCharCode(charCode + 13);
    } else {
      newString[i] = message[i];
    }
  }

  return newString.join('').replace(/-/g, ' ');
}

rot13('grfg');
