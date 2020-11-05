function quadradodeasterisco(n) {
  for (let i = 0; i < n; i++) {
    console.log("*".repeat(n));
  }
}

function triangulo(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i) + " ".repeat(5 - i));
  }
}

function trianguloinvertido(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
  }
}

function piramide(n) {
  for (let i = 1; i <= n; i += 2) {
    console.log(" ".repeat((n - i) / 2) + "*".repeat(i) + " ".repeat((n - i) / 2));
  }
}

function piramideVazia(n) {
  for (let i = 1; i <= n; i += 2) {
    if (i === 1) {
      console.log(" ".repeat((n - i) / 2) + "*".repeat(i) + " ".repeat((n - i) / 2));
      continue;
    }
    if (i != n) {
      console.log(" ".repeat((n - i) / 2) + "*".repeat(1) + " ".repeat(i - 2) + "*".repeat(1) + " ".repeat((n - i) / 2));
    } else {
      console.log(" ".repeat((n - i) / 2) + "*".repeat(i) + " ".repeat((n - i) / 2));
    }
  }
}

function numeroEhPrimo(n) {
  if (n === 1 || n === 0) {
    console.log(n + " nao eh primo");
    return;
  }
  let primos = [2, 3];
  for (let i = 2; i <= n; i++) {
    if (divideporprimos(i, primos)) {
      primos.push(i);
    }
  }
  if (primos[primos.length - 1] == n) {
    console.log(n + " eh primo");
    return;
  }
  console.log(n + " nao eh primo");
  return;
}

function divideporprimos(i, array) {
  for (let j = 0; j < array.length; j++) {
    if (i % array[j] == 0) {
      return false;
    }
  }
  return true;
}

function mesmaLinhaOuColuna(pr, pp, n) {
  if (pr[0] === pp[0] || pr[1] === pp[1]) {
    return true;
  }
  return false;
}

function checaDiagSupEsquerda(pr, pp, n) {
  let linha = pr[0];
  let coluna = pr[1];
  while (linha >= 0 || coluna >= 0) {
    linha -= 1;
    coluna -= 1;
    let temp = [linha, coluna];
    if (JSON.stringify(temp) === JSON.stringify(pp)) {
      return true;
    }
  }
  return false;
}

function checaDiagSupDireita(pr, pp, n) {
  let linha = pr[0];
  let coluna = pr[1];
  while (linha <= n || coluna >= 0) {
    linha += 1;
    coluna -= 1;
    let temp = [linha, coluna];
    if (JSON.stringify(temp) === JSON.stringify(pp)) {
      return true;
    }
  }
  return false;
}

function checaDiagInfDireita(pr, pp, n) {
  let linha = pr[0];
  let coluna = pr[1];
  while (linha <= n || coluna <= n) {
    linha += 1;
    coluna += 1;
    let temp = [linha, coluna];
    if (JSON.stringify(temp) === JSON.stringify(pp)) {
      return true;
    }
  }
  return false;
}

function checaDiagInfEsquerda(pr, pp, n) {
  let linha = pr[0];
  let coluna = pr[1];
  while (linha >= 0 || coluna <= n) {
    linha -= 1;
    coluna += 1;
    let temp = [linha, coluna];
    if (JSON.stringify(temp) === JSON.stringify(pp)) {
      return true;
    }
  }
  return false;
}

function rainha(pr, pp, n) {
  if (mesmaLinhaOuColuna(pr, pp, n) || checaDiagSupEsquerda(pr, pp, n) || checaDiagSupDireita(pr, pp, n) || checaDiagInfDireita(pr, pp, n) || checaDiagInfEsquerda(pr, pp, n)) {
    console.log("Movimento valido");
  } else {
    console.log("movimento  invalido");
  }
}

rainha([2, 2], [3, 3], 8); //valido
rainha([2, 2], [5, 2], 8); //valido
rainha([2, 2], [4, 1], 8); //invalid0
rainha([2, 2], [4, 0], 8); //valido
rainha([2, 2], [1, 0], 8); //invalido
rainha([2, 2], [0, 4], 8); //valido
