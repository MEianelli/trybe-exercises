const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten(arrays) {
  return arrays.reduce((a, c) => a.concat(c), []);
}

console.log(flatten(arrays));

assert.deepEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);
