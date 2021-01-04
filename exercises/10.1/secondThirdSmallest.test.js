const secondThirdSmallest = require('./secondThirdSmallest');

describe('Bloco 1', () => {
  it('TEST', () => {
    const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
    const result = [5, 6];
    expect(secondThirdSmallest(parameter)).toEqual(result);
  });
});
