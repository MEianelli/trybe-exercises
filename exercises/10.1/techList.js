// Desafio 10
function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  array.sort();
  return array.map(e => {
    return (temp = {
      tech: e,
      name: name,
    });
  });
}

module.exports = techList;
