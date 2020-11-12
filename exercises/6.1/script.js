window.onload = function () {
  let estadosArray = [
    "SP",
    "RJ",
    "RS",
    "SC",
    "PR",
    "MG",
    "ES",
    "MT",
    "MS",
    "GO",
    "TO",
    "DF",
    "BA",
    "AL",
    "PE",
    "RN",
    "MA",
    "PI",
    "PB",
    "AP",
    "AC",
    "AM",
    "PA",
    "RR",
    "RO",
    "SE",
    "CE",
  ];
  let estados = document.querySelector("#estados");
  estadosArray.forEach((e) => {
    let uf = document.createElement("option");
    uf.value = e;
    uf.innerHTML = e;
    estados.appendChild(uf);
  });

  document.querySelector("#montarCV").addEventListener("click", (e) => {
    e.preventDefault();
    montaCV();
  });

  document.querySelector("#limparDados").addEventListener("click", limparDados);
};
function montaCV() {
  let dados = selectAllDada();

  let divResume = document.querySelector("#resume");
  divResume.innerHTML = "";

  dados.forEach((e) => {
    let p = document.createElement("p");
    let span = document.createElement("span");
    p.classList.add("resumeP");
    span.classList.add("resumeSpan");

    span.innerHTML = e.name + ": ";

    p.appendChild(span);
    p.innerHTML += e.value;
    divResume.appendChild(p);
  });
}

function limparDados() {
  let dados = selectAllDada();

  let divResume = document.querySelector("#resume");
  divResume.innerHTML = "";

  dados.forEach((e) => {
    e.value = "";
  });
}

function selectAllDada() {
  let dados = [];

  let nome = document.querySelector("#nome");
  let email = document.querySelector("#email");
  let cpf = document.querySelector("#cpf");
  let endereco = document.querySelector("#endereco");
  let cidade = document.querySelector("#cidade");
  let estados = document.querySelector("#estados");
  let casa = document.querySelector("#casa");
  let apartamento = document.querySelector("#apartamento");
  let moradia;

  moradia = casa.checked ? casa : apartamento;

  let resumoCV = document.querySelector("#resumoCV");
  let cargo = document.querySelector("#cargo");
  let descricaoCargo = document.querySelector("#descricaoCargo");
  let dataInicio = document.querySelector('input[type="date"]');

  dados.push(nome, email, cpf, endereco, cidade, estados, moradia, resumoCV, cargo, descricaoCargo, dataInicio);

  return dados;
}
