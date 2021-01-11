const { test, expect } = require('@jest/globals');
let fetch = require('node-fetch');

const testInput = new Promise((resolve, reject) => {
  return resolve({
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  });
});

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' } }).then(data => data.joke);
};

test('Testar mudando o fetch para algo falso', async () => {
  fetch = jest.fn().mockReturnValue(testInput);
  fetchJoke();
  expect(fetch).toHaveBeenCalled();
  expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});

/* const fakeFetch = new Promise((resolve, reject) => {
  if (true) {
    return resolve({
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    });
  } else {
    return reject('DEU RUIM');
  }
});

const fakefetchJoke = () => fakeFetch.then(data => data.joke);

fakefetchJoke().then(joke => console.log(joke)); */
