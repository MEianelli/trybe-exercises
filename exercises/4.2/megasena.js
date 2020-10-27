let escolha = [10, 12, 24, 29, 44, 50];
let sorteio = [];

while (sorteio.length < 6) {
  let newN = Math.floor(Math.random() * 60 + 1);
  if (sorteio.indexOf(newN) < 0) {
    sorteio.push(newN);
  }
}

console.log(escolha);
console.log(sorteio);
console.log(
  sorteio.sort((a, b) => {
    return a - b;
  })
);
