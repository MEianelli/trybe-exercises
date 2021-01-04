function secondThirdSmallest(array) {
  return [array.sort((a, b) => a - b)[1], array.sort((a, b) => a - b)[2]];
}

module.exports = secondThirdSmallest;
