const removeVowels = word => {
  let counter = 1;
  return word
    .split('')
    .map(letter => {
      if ('aeiou'.split('').includes(letter)) {
        return counter++;
      } else {
        return letter;
      }
    })
    .join('');
};

module.exports = removeVowels;
