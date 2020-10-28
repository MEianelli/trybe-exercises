function palindromo(s) {
  return s.split("").reverse().join("") === s;
}
console.log(palindromo("arara"));

function indexOfBiggest(array) {
  let maior = 0;
  for (let i in array) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return array.indexOf(maior);
}
console.log(indexOfBiggest([2, 3, 6, 7, 10, 1]));

function indexOfSmallest(array) {
  let menor = array[0];
  for (let i in array) {
    if (array[i] < menor) {
      menor = array[i];
    }
  }
  return array.indexOf(menor);
}
console.log(indexOfSmallest([2, 4, 6, 7, 10, 0, -3]));

function indexMaiorNome(array) {
  let maior = 0;
  let index = 0;
  for (let i in array) {
    if (array[i].length > maior) {
      maior = array[i].length;
      index = i;
    }
  }
  return array[index];
}

console.log(indexMaiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]));

function maisSeRepete(array) {
  let maxcount = 0;
  let elemento;
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    if (count >= maxcount) {
      maxcount = count;
      elemento = array[i];
    }
  }
  return elemento;
}

console.log(maisSeRepete([2, 3, 2, 3, 3, 3, 5, 8, 2, 3]));

function somatoria(N) {
  let total = 0;
  for (let i = 1; i <= N; i++) {
    total += i;
  }
  return total;
}

console.log(somatoria(5));

function verificaFimPalavra(string, end) {
  return string.slice(-end.length) === end;
}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));
