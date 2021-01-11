const { test } = require('@jest/globals');
let random = require('./randomNumber');

test('retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  random.randomNumber = jest.fn().mockReturnValue(10);
  random.randomNumber();
  expect(random.randomNumber).toHaveBeenCalled();
  expect(random.randomNumber).toHaveBeenCalledTimes(1);
  expect(random.randomNumber()).toBe(10);
});

test('crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
  random.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  expect(random.randomNumber(6, 3)).toBe(2);
});

test('primeiro multiplicar 3 parametros, depois retornar o dobro', () => {
  const mockRandom = jest.spyOn(random, 'randomNumber').mockImplementation((a, b, c) => a * b * c);
  random.randomNumber();
  expect(mockRandom).toHaveBeenCalled();
  expect(mockRandom).toHaveBeenCalledTimes(2);
  expect(mockRandom(2, 3, 4)).toBe(24);

  mockRandom.mockReset();
  mockRandom.mockImplementation(a => 2 * a);
  random.randomNumber();
  expect(mockRandom).toHaveBeenCalled();
  expect(mockRandom).toHaveBeenCalledTimes(1);
  expect(mockRandom(4)).toBe(8);
});
