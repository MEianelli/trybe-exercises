const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

const fetchJoke = async () => {
  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(r => r.joke);
};

async function showJoke() {
  await fetchJoke().then(joke => {
    const jokeContainer = document.querySelector('#jokeContainer');
    jokeContainer.innerHTML = joke;
  });
}
window.onload = () => {
  showJoke();
};
