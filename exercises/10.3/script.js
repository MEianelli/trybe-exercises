const { expect } = require('@jest/globals');

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const isDivisible = number => randomNumber() % number === 0;

describe('Testes com funcao aleatoria usando mock', () => {
  randomNumber = jest.fn();
  isDivisible();
  it('Testa se quando chamamos isDivisible a funcao random eh chamada', () => {
    expect(randomNumber).toHaveBeenCalled();
  });
});
