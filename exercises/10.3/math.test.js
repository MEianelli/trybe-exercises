const { test, expect } = require('@jest/globals');
const math = require('./math');
jest.mock('./math');

test('Faça o mock da funcão subtrair e teste sua chamada', () => {
  math.somar.mockImplementation((a, b) => a - b);
  expect(math.somar(5, 2)).toBe(3);
});

test('Faça o mock da função multiplicar e implemente como retorno padrão o valor 10.', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);
  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar(2, 6)).toBe(10);
  expect(math.multiplicar(2, 7)).toBe(10);
});

test('Faça o mock da funcão subtrair e teste sua chamada', () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(5, 2);
  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledWith(5, 2);
  expect(math.somar(5, 2)).toBe(7);
});
