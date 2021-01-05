const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = async id => {
  if (users[id]) {
    return users[id].name;
  }

  return { error: 'User with ' + id + ' not found.' };
};

describe('Teste de usuario valido e invalido', () => {
  it('Testar se retorna certo quando passado usuario valido', async () => {
    let name = await findUserById(4);
    expect(name).toEqual('Mark');
  });

  it('Testar se retorna erro quando passado usuario invalido', async () => {
    try {
      await findUserById(3);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 3 not found.' });
    }
  });
});
