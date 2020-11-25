const assert = require('assert');

const getLargestNumber = (array) => [...new Set(array)].sort((a, b) => b - a)[0];

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
const test0 = getLargestNumber([45, 8, 2, 50, 1, 7, 99]);

assert.strictEqual(test0, 99);
