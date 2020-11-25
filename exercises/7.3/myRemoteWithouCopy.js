const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

const input = [1, 2, 3, 4];
const teste = myRemoveWithoutCopy(input, 3);
const teste2 = myRemoveWithoutCopy(input, 5);

assert.deepStrictEqual(teste, [1, 2, 4], 'Nao removeu o 3 , nao eh o esperado');
assert.notDeepStrictEqual(teste, [1, 2, 3, 4], 'Nao removeu o 3 , nao eh o esperado');
assert.deepStrictEqual(input, input, 'Array sofreu modificacao');
assert.deepStrictEqual(teste2, [1, 2, 3, 4], 'Nao retornou o esperado');
