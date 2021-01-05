const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('Testando se faz o uppercase', done => {
  uppercase('xablau', result => {
    expect(result).toBe('XABLAU');
    done();
  });
});
