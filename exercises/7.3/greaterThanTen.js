const assert = require('assert');

const greaterThanTen = (array) => array.filter((e) => e > 10);

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
const test0 = greaterThanTen(parameter);
const test1 = greaterThanTen([11]);

assert.strictEqual(typeof greaterThanTen, 'function', 'Nao eh uma funcao');
assert.deepStrictEqual(typeof test1, 'object', 'Nao eh um array a saida');
assert.deepStrictEqual(test0, result, 'Nao eh o resultado esperado de [32, 21]');
