let preferencias = [
  { nome: "Joao", corFundo: "lightblue", color: "white", fontSize: "16px", lineHeight: "35px", fontFamily: "Verdana" },
  {
    nome: "Marcos",
    corFundo: "aqua",
    color: "black",
    fontSize: "13px",
    lineHeight: "30px",
    fontFamily: "Franklin Gothic Medium",
  },
  { nome: "Maria", corFundo: "brown", color: "green", fontSize: "17px", lineHeight: "33px", fontFamily: "Courier New" },
  { nome: "Filipe", corFundo: "burlywood", color: "red", fontSize: "20px", lineHeight: "40px", fontFamily: "Lucida Sans" },
];

for (let i = 0; i < preferencias.length; i++) {
  localStorage.setItem(preferencias[i]["nome"], JSON.stringify(preferencias[i]));
}

function funcaoBotao() {
  let entrada = document.getElementsByTagName("input")[0];
  entrada.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      if (localStorage.getItem(entrada.value) === null) {
        alert("nome nao existe");
        return;
      }
      aplicarStyle(entrada.value);
      entrada.value = "";
    }
  });
}
funcaoBotao();

function aplicarStyle(string) {
  let info = JSON.parse(localStorage.getItem(string));
  let leitura = document.querySelector(".texto");
  leitura.style.backgroundColor = info["corFundo"];
  leitura.style.color = info["color"];
  leitura.style.fontSize = info["fontSize"];
  leitura.style.lineHeight = info["lineHeight"];
  leitura.style.fontFamily = info["fontFamily"];
}

let novo = {
  nome: "Pai",
  corFundo: "red",
  color: "lightblue",
  fontSize: "12px",
  lineHeight: "15px",
  fontFamily: "Times New Roman",
};

function adiconarItem(obj) {
  localStorage.setItem(obj["nome"], JSON.stringify(obj));
}
adiconarItem(novo);
