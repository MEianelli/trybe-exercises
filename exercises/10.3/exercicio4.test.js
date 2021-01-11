const { expect } = require('@jest/globals');
const funcs = require('./exercicio4'); //module.exports = { maiusculator, firstLetter, concatStrings };
//jest.mock('./exercicio4');

test('Mudar funcoes e testar resultados depois resetar e testar denovo', () => {
  let mockMaiuscula = jest
    .spyOn(funcs, 'maiusculator')
    .mockImplementation(string => string.toLowerCase());
  expect(mockMaiuscula('AAAA')).toBe('aaaa');

  mockMaiuscula.mockRestore();
  mockMaiuscula = jest.spyOn(funcs, 'maiusculator');
  expect(mockMaiuscula('aaa')).toEqual('AAA');
});
