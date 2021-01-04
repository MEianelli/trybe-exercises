const greetPeople = require('./greetPeople');

describe('Bloco 1', () => {
  it('Testa se quando passamos um array com nome de pessoas, retorno cada uma com Hello na frente', () => {
    const parameter = ['Irina', 'Ashleigh', 'Elsa'];
    const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
    expect(greetPeople(parameter)).toEqual(result);
  });
});
