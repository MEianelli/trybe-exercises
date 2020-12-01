const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const teste0 = myFizzBuzz(15);
const teste1 = myFizzBuzz(9);
const teste2 = myFizzBuzz(10);
const teste3 = myFizzBuzz(11);
const teste4 = myFizzBuzz('a');

assert.strictEqual(teste0, 'fizzbuzz', 'Nao retornou fizzbuzz com entrada divisivel por 3 e 5');
assert.strictEqual(teste1, 'fizz', 'Nao retornou fizz com entrada divisivel por 3 apenas');
assert.strictEqual(teste2, 'buzz', 'Nao retornou buzz com entrada divisivel por 5 apenas');
assert.strictEqual(teste3, 11, 'Nao retornou a entrada , para caso da entrada nao ser divisivel por 3 e 5');
assert.strictEqual(teste4, false, 'Nao falso com entrada que nao eh numero');
