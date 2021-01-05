const fetch = require('node-fetch');

const getRepos = url => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.map(repo => repo.name);
    });
};

//getRepos('https://api.github.com/users/tryber/repos').then(result => console.log(result));

describe('Testar API do GITHUB', () => {
  it('Testar se o retorno da API possui os repos corretos', () => {
    expect.assertions(1);
    return getRepos('https://api.github.com/users/tryber/repos').then(result => {
      expect(result.find(e => e === 'enterprise-bridge-panel')).toBe('enterprise-bridge-panel');
    });
  });
});

//'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator'
