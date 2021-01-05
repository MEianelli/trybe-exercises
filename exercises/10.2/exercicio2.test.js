const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = id => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = userID => {
  return findUserById(userID).then(user => user.name);
};

describe('Teste de usuario valido e invalido', () => {
  it('Testar se retorna certo quando passado usuario valido', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toEqual('Mark');
  });

  it('Testar se retorna erro quando passado usuario invalido', () => {
    expect.assertions(1);
    return expect(getUserName(3)).rejects.toEqual({ error: 'User with 3 not found.' });
  });
});
