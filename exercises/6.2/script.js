import { inputGenerator } from "./inputGenerator.js";
import { inputDados } from "./inputDados.js";

let wraper = document.querySelector(".wraper");
let inputDOMs = inputGenerator(wraper, inputDados);

inputDOMs["name"].addEventListener("change", () => {
  nameCheck(inputDOMs["name"]);
});

function nameCheck(dom) {
  let NOME = dom;
  if (NOME.value === "") return;

  let temp = NOME.value.split(" ").filter((e) => e !== "");
  for (let i = 0; i < temp.length; i++) {
    if (/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]/.test(temp[i])) {
      NOME.value = "";
      return alert("Nome deve conter apenas letras");
    }
  }
  let temp2 = temp.map((e) => {
    return e.charAt(0).toUpperCase() + e.slice(1);
  });
  NOME.value = temp2.join(" ");
}

async function apiCEP() {
  let CEP = document.querySelector("#cep");
  if (CEP.value === "") return;

  if (CEP.value.length === 8) {
    let resposta = await fetch("https://brasilapi.com.br/api/cep/v1/" + CEP.value);
    var cep = await resposta.json();
  } else {
    CEP.value = "";
    return alert("CEP deve conter 8 digitos");
  }

  let END = document.querySelector("#endereco");
  let BAIRRO = document.querySelector("#bairro");
  let CIDADE = document.querySelector("#cidade");
  let ESTADO = document.querySelector("#estado");

  END.value = cep.street;
  BAIRRO.value = cep.neighborhood;
  CIDADE.value = cep.city;
  ESTADO.value = cep.state;
}

function cpfCheck() {
  let CPF = document.querySelector("#cpf");
  if (CPF.value === "") return;
  if (CPF.value.length > 11 || CPF.value.length < 10) {
    alert("CPF deve conter no maximo 11 digitos");
    CPF.value = "";
  } else {
    let result = CPF.value.match(/.{1,3}/g);
    result.splice(1, 0, ".");
    result.splice(3, 0, ".");
    result.splice(5, 0, "-");
    CPF.value = result.join("");
  }
}

function endCheck() {
  let END = document.querySelector("#endereco");
  if (END.value === "") return;

  let temp = END.value.split(" ").filter((e) => e !== "");
  for (let i = 0; i < temp.length; i++) {
    if (/[^a-zA-Z0-9ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]+/.test(temp[i])) {
      END.value = "";
      return alert("Campo deve conter apenas letras ou numeros");
    }
  }
}

function numCheck() {
  let NUM = document.querySelector("#numerorua");
  if (NUM.value === "") return;
}

function telCheck(string) {
  /*possibilidades
    011968455654 12
    11953366998 11
    (011) 35737325 10
    011
    */

  let TEL = document.querySelector("#telefone");
  if (TEL.value === "") return;

  let onlyNumbers = TEL.value
    .split("")
    .filter((e) => Number.isInteger(parseInt(e)))
    .map((e) => {
      return parseInt(e);
    });

  if (onlyNumbers[0] !== 0) {
    onlyNumbers.splice(0, 0, 0);
  }

  if (onlyNumbers.length < 11) {
    TEL.value = "";
    return alert("Favor preencher numero com DDD no formato ddd nnnnn nnnn");
  }

  if (onlyNumbers.length === 11) {
    onlyNumbers.splice(0, 0, "(");
    onlyNumbers.splice(4, 0, ") ");
    onlyNumbers.splice(9, 0, "-");
    TEL.value = onlyNumbers.join("");
  } else if (onlyNumbers.length === 12) {
    onlyNumbers.splice(0, 0, "(");
    onlyNumbers.splice(4, 0, ") ");
    onlyNumbers.splice(10, 0, "-");
    TEL.value = onlyNumbers.join("");
  } else if (onlyNumbers.length > 12) {
    TEL.value = "";
    return alert("Numero deve conter no maximo 12 digitos");
  }
}

function cardCheck() {
  let CARD = document.querySelector("#cartao");
  if (CARD.value === "") return;

  if (CARD.value.length !== 16) return alert("Cartao deve conter 16 digitos");
}

function vencCheck() {
  let VENC = document.querySelector("#vencimento");
  if (VENC.value === "") return;

  if (VENC.value.length !== 4) {
    VENC.value = "";
    return alert("Campo deve conter apenas numeros no formato MMAA");
  }

  /* possibilidades 321 ,02 21, 02 2021, 02/2021, 2/32, 32/32, */

  let temp = VENC.value.split(" ").filter((e) => e !== "");
  for (let i = 0; i < temp.length; i++) {
    if (/[^0-9]+/.test(temp[i])) {
      VENC.value = "";
      return alert("Campo deve conter apenas numeros no formato MMAA");
    }
  }

  VENC.value = VENC.value.slice(0, 2) + "/" + VENC.value.slice(-2);
}
function codCheck() {
  let COD = document.querySelector("#codigo");
  if (COD.value === "") return;

  if (COD.value.length !== 3) {
    COD.value = "";
    return alert("Campo deve conter 3 digitos");
  }
}
