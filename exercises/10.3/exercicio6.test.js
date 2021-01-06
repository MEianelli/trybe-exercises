//https://dog.ceo/api/breeds/list/all
//https://dog.ceo/api/breeds/image/random random

const fetch = require('node-fetch');

function dogAPI(url) {
  return fetch(url).then(result => result.json().then(json => json));
}

describe('testando a requisição', () => {
  const apiURL = jest.spyOn({ dogAPI: dogAPI }, 'dogAPI');
  afterEach(apiURL.mockReset);

  test('testando requisição caso a promise resolva', async () => {
    apiURL.mockResolvedValue('request sucess');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('request sucess');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test('testando requisição caso a promise seja rejeitada', async () => {
    apiURL.mockRejectedValue('requisição falhou');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('requisição falhou');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});

/**const api = require("./api");

describe("testando a requisição", () => {
  const apiURL = jest.spyOn( api, "fetchURL");
  afterEach(apiURL.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    apiURL.mockResolvedValue('requisição realizada com sucesso');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    apiURL.mockRejectedValue('a requisição falhou');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('a requisição falhou');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
}); */
