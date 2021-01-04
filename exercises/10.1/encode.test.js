const encode = require('./encode');
const decode = require('./decode');

describe('Bloco Encode/Decode', () => {
  it('Testar se são funcoes', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Testar se função encode as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });

  it('Testar se função decode números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });

  it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('bcdfghjklmnpqrstvxwyz')).toBe('bcdfghjklmnpqrstvxwyz');
    expect(decode('bcdfghjklmnpqrstvxwyz')).toBe('bcdfghjklmnpqrstvxwyz');
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('bcdfghjklmnpqrstvxwyz').length).toBe('bcdfghjklmnpqrstvxwyz'.length);
    expect(decode('bcdfghjklmnpqrstvxwyz').length).toBe('bcdfghjklmnpqrstvxwyz'.length);
  });
});
