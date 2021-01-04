function decode(string) {
  return string
    .split('')
    .map(e => {
      return Number.isInteger(parseInt(e)) ? 'aeiou'.split('')[parseInt(e) - 1] : e;
    })
    .join('');
}

module.exports = decode;
