const assert = require('assert');

const names = ['Aanemarie', 'Adervandes', 'Akifusa', 'Abegildo', 'Adicellia', 'Aladonata', 'Abeladerco', 'Adieidy', 'Alarucha'];

function containsA(names) {
  return names.reduce((a, c) => a + c.match(/a/gi).length, 0);
}

//console.log(containsA(names));

assert.deepEqual(containsA(names), 20);
