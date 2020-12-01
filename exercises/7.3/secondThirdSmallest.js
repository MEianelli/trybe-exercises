const assert = require('assert');

function secondThirdSmallest(array) {
  const res = [...new Set(array)].sort((a, b) => a - b);
  return [res[1], res[2]];
}

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
const test0 = secondThirdSmallest([4, 10, 32, 9, 21, 90, 5, 11, 8, 6]);
const test1 = secondThirdSmallest([4, 10, 32, 9, 21, 90, 5, 11, 8, 6, 5, 5]);

assert.deepStrictEqual(test0, result, ' Saida nao eh igual ao esperado');
assert.deepStrictEqual(test1, result, ' Saida nao eh igual ao esperado');
