function encode(string) {
  return string
    .split('')
    .map(e => {
      return 'aeiou'.split('').indexOf(e) > -1 ? 'aeiou'.split('').indexOf(e) + 1 : e;
    })
    .join('');
}

module.exports = encode;
