let h1 = document.createElement("h1");
h1.innerHTML = "Exercício 5.2 - JavaScript DOM";
let b = document.getElementsByTagName("body")[0];
b.appendChild(h1);

let divMain = document.createElement("div");
divMain.classList.add("main-content");

b.appendChild(divMain);

let divCenter = document.createElement("div");
divCenter.classList.add("center-content");

divMain.appendChild(divCenter);

let paraGraph = document.createElement("p");
paraGraph.innerHTML = "XABLAU";

divCenter.appendChild(paraGraph);

let divLeft = document.createElement("div");
divLeft.classList.add("left-content");

let divRight = document.createElement("div");
divRight.classList.add("right-content");

divMain.appendChild(divLeft);
divMain.appendChild(divRight);

let img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.classList.add("small-image");

divLeft.appendChild(img);

let ul = document.createElement("ul");

let li1 = document.createElement("li");
li1.innerHTML = "um";
ul.appendChild(li1);

let li2 = document.createElement("li");
li2.innerHTML = "dois";
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.innerHTML = "tres";
ul.appendChild(li3);

let li4 = document.createElement("li");
li4.innerHTML = "quatro";
ul.appendChild(li4);

let li5 = document.createElement("li");
li5.innerHTML = "cinco";
ul.appendChild(li5);

let li6 = document.createElement("li");
li6.innerHTML = "seis";
ul.appendChild(li6);

let li7 = document.createElement("li");
li7.innerHTML = "sete";
ul.appendChild(li7);

let li8 = document.createElement("li");
li8.innerHTML = "oito";
ul.appendChild(li8);

let li9 = document.createElement("li");
li9.innerHTML = "nove";
ul.appendChild(li9);

let li10 = document.createElement("li");
li10.innerHTML = "dez";
ul.appendChild(li10);

divRight.appendChild(ul);

let h31 = document.createElement("h3");
let h32 = document.createElement("h3");
let h33 = document.createElement("h3");

divMain.appendChild(h31);
divMain.appendChild(h32);
divMain.appendChild(h33);

h1.classList.add("title");
h31.classList.add("description");
h32.classList.add("description");
h33.classList.add("description");

divMain.removeChild(divLeft);

divRight.style.marginRight = "auto";
divCenter.style.backgroundColor = "green";

ul.removeChild(ul.lastChild);
ul.removeChild(ul.lastChild);
