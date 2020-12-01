const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
const input = [1, 2, 3, 4];
const teste = myRemove(input, 3);
const teste2 = myRemove(input, 5);

assert.deepStrictEqual(teste, [1, 2, 4], 'Nao removeu o 3 , nao eh o esperado');
assert.notDeepStrictEqual(teste, [1, 2, 3, 4], 'Nao removeu o 3 , nao eh o esperado');
assert.deepStrictEqual(input, input, 'Array sofreu modificacao');
assert.deepStrictEqual(teste2, [1, 2, 3, 4], 'Nao retornou o esperado');
