const removeVowels = require('./removeVowels');

describe('Bloco 1', () => {
  it('Quando passamos uma string, retorna uma string trocando vogais por numeros', () => {
    const parameter = 'Dayane';
    const result = 'D1y2n3';
    expect(removeVowels(parameter)).toEqual(result);
  });
});
