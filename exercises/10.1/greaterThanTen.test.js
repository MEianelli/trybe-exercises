const greaterThanTen = require('./greaterThanTen');

describe('Bloco 1', () => {
  it('Quando passamos uma string, retorna uma string trocando vogais por numeros', () => {
    const parameter = [4, 10, 32, 9, 21];
    const result = [32, 21];
    expect(greaterThanTen(parameter)).toEqual(result);
  });
});
