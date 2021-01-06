const { expect } = require('@jest/globals');

let randomNumber = () => Math.floor(Math.random() * 100) + 1;

const isDivisible = number => randomNumber() % number === 0;

describe('Testes com funcao aleatoria usando mock', () => {
  it('Testa se quando chamamos isDivisible a funcao random eh chamada', () => {
    randomNumber = jest.fn();
    isDivisible();
    expect(randomNumber).toHaveBeenCalled();
  });

  it('Testa se retorna um número par e isDivisible() recebe um dois, o retorno é true .', () => {
    randomNumber = jest.fn().mockReturnValueOnce(100);
    expect(isDivisible(2)).toBe(true);
  });

  it('Simule ( mocke ) dois valores para a função', () => {
    randomNumber = jest.fn().mockReturnValue(100).mockReturnValueOnce(99).mockReturnValueOnce(13);
    expect(isDivisible(2)).toBe(false);
    expect(isDivisible(13)).toBe(true);
    expect(isDivisible(2)).toBe(true);
  });
});
