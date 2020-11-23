const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
};

/* function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
} */

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arrumar = (array) => {
  array.sort((a, b) => a - b);
  let res = 'Os números ';
  for (let i = 0; i < array.length; i += 1) {
    res += `${array[i]},`;
  }
  res += `se encontram ordenados de forma crescente!`;
  return res;
};

console.log(arrumar(oddsAndEvens));

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

console.log(factorial(20));

const maiorPalavra = (string) => string.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));

const replaceX = (string) => 'Tryber x aqui'.replace('x', string);

const skills = ['css', 'html', 'javacript', 'git', 'linux'];

const montarTexto = (string) => {
  skills.sort();
  let res = `${string}
Minhas cinco principais habilidades são:
    `;
  skills.forEach(
    (e) =>
      (res += `${e};
    `)
  );
  res += `#goTrybe.`;
  return res;
};

console.log(montarTexto(replaceX('Filipe')));

/*
"Tryber x aqui!
Minhas cinco principais habilidades são:
JavaScript;
HTML; ...
#goTrybe".
*/

document.querySelector('.btn').addEventListener('click', () => {
  const divText = document.querySelector('.text');
  divText.innerHTML = +divText.innerHTML + 1;
});
