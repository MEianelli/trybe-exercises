let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

console.log("Bem Vinda, " + info.personagem);

info["recorrente"] = "Sim";
console.table(info);

for (let i in info) {
  console.log(i);
}

for (let i in info) {
  console.log(info[i]);
}

for (let i in info) {
  console.log(info[i] + " e " + info2[i]);
}
