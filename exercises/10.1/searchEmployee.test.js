const searchEmployee = require('./searchEmployee');

describe('Bloco 1', () => {
  it('Testa se funcao esta definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Testa se é do type function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Testa se retorna info sobre funcionario corretamente', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
  });

  it('Testa se retorna erro quando ID nao é encontrada', () => {
    expect(() => {
      searchEmployee('xablau', '');
    }).toThrowError(new Error('ID não identificada'));
  });

  it('Testa se retorna erro quando info nao é valida', () => {
    expect(() => {
      searchEmployee('4678-2', 'xablau');
    }).toThrowError(new Error('Informação indisponível'));
  });
});

//Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada
//Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada"
//Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" .
