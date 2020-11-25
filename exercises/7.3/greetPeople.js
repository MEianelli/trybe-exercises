const assert = require('assert');

const greetPeople = (people) => people.map((e) => `Hello ${e}`);

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const test0 = greetPeople(['']);
const test1 = greetPeople(parameter);

assert.deepStrictEqual(typeof test0, 'object', 'Saida nao eh uma string');
assert.deepStrictEqual(test0, ['Hello '], 'Saida nao eh "Hello " como esperado');
assert.deepStrictEqual(test1, result, 'Saida nao eh como esperado');
