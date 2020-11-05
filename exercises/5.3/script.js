function createDaysOfTheWeek() {
  const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulDays = document.querySelector("#days");

  for (let i = 0; i < dezDaysList.length; i++) {
    let day = dezDaysList[i];
    let dayDom = document.createElement("li");
    dayDom.classList.add("day");
    dayDom.innerHTML = day;
    if (day === 24 || day === 25 || day === 31) {
      dayDom.classList.add("holiday");
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayDom.classList.add("friday");
    }

    dayDom.addEventListener("click", adicionaCorSelected);
    ulDays.appendChild(dayDom);
  }
  ulDays.addEventListener("mouseover", zoomIn);
  ulDays.addEventListener("mouseout", zoomOut);
}

createDaysMonth();

function createButtonFeriado(string) {
  let botao = document.createElement("button");
  botao.classList.add("btn-holiday");
  botao.innerHTML = string;
  botao.addEventListener("click", mudarCor);

  let botaoWrap = document.querySelector(".buttons-container");

  botaoWrap.appendChild(botao);
}

createButtonFeriado("Feriados");

//rgb(238,238,238)
function mudarCor() {
  let feriados = document.querySelectorAll(".holiday");
  feriados.forEach((e) => {
    e.classList.toggle("cornova");
  });
}

function createButtonFriday(string) {
  let botao = document.createElement("button");
  botao.classList.add("btn-friday");
  botao.innerHTML = string;
  botao.addEventListener("click", mudarTexto);

  let botaoWrap = document.querySelector(".buttons-container");

  botaoWrap.appendChild(botao);
}

createButtonFriday("Sexta-feira");

function mudarTexto() {
  let sextas = document.querySelectorAll(".friday");
  sextas.forEach((e, index) => {
    if (e.innerHTML === "XABLAU") {
      e.innerHTML = index + 4 + 6 * index;
    } else {
      e.innerHTML = "XABLAU";
    }
  });
}

function zoomIn(evt) {
  evt.target.style.fontSize = "x-large";
}

function zoomOut(evt) {
  evt.target.style.fontSize = "20px";
}

function criarTarefa(string) {
  let task = document.createElement("span");
  task.innerHTML = string;
  let wrap = document.querySelector(".my-tasks");
  wrap.appendChild(task);
}

criarTarefa("cozinhar");
criarTarefa("dormir");

function criarLeganda(cor) {
  let legenda = document.createElement("div");
  legenda.classList.add("task");
  legenda.addEventListener("click", addClassSelected);
  legenda.style.backgroundColor = cor;
  let wrap = document.querySelector(".my-tasks");
  wrap.appendChild(legenda);
}

function addClassSelected(evt) {
  evt.target.classList.toggle("selected");
}

criarLeganda("lightblue");
criarLeganda("lightgreen");

function adicionaCorSelected(evt) {
  let corSelecionada = document.querySelector(".selected").style.backgroundColor;
  if (evt.target.style.backgroundColor === corSelecionada) {
    evt.target.style.backgroundColor = "#eee";
  } else {
    evt.target.style.backgroundColor = corSelecionada;
  }
}

let btnAdd = document.querySelector("#btn-add");
btnAdd.addEventListener("click", addCompromisso);

let inputData = document.querySelector("#task-input");
inputData.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    addCompromisso();
  }
});

function addCompromisso() {
  let inputData = document.querySelector("#task-input");
  let texto = inputData.value;
  if (texto === "") return alert("Campo vazio");

  let novoItem = document.createElement("li");
  novoItem.innerHTML = texto;

  let listaCompromisso = document.querySelector(".task-list");
  listaCompromisso.appendChild(novoItem);
  inputData.value = "";
}
