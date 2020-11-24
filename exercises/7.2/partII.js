const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const insertLesson2 = (target, key, value) => (target[key] = value);
insertLesson2(lesson2, 'turno', 'manhã');
console.log(lesson2);

const showKeys = (obj) => console.log(Object.keys(obj));
showKeys(lesson3);

const showValues = (obj) => console.log(Object.values(obj));
showValues(lesson1);

const showSize = (obj) => console.log(Object.values(obj).length);
showSize(lesson2);

let allLessons = {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
};

console.log(allLessons);

const numeroTotal = (obj) =>
  Object.keys(obj)
    .map((e) => obj[e].numeroEstudantes)
    .reduce((acc, curr) => (acc += curr));
console.log(numeroTotal(allLessons));

const getValueByNumber = (obj, index) => Object.values(obj)[index];
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
  let temp = Object.entries(obj);
  for (let i = 0; i < temp.length; i += 1) {
    if (temp[i][0] === key && temp[i][1] === value) {
      return true;
    }
  }
  return false;
};

console.log(verifyPair(lesson3, 'asdasd', 'noite'));

const contarAlunos = (obj, string) => {
  return Object.keys(obj)
    .map((e) => {
      if (obj[e].materia === string) {
        return obj[e].numeroEstudantes;
      } else {
        return 0;
      }
    })
    .reduce((a, c) => (a += c));
};

console.log(contarAlunos(allLessons, 'Matemática'));

const createReport = (obj, name) => {
  const aulas = [];
  for (let i = 0; i < Object.keys(obj).length; i += 1) {
    if (obj[Object.keys(obj)[i]].professor === name) {
      aulas.push(obj[Object.keys(obj)[i]].materia);
    }
  }

  return {
    professor: name,
    aulas: aulas,
    estudantes: aulas.map((e) => contarAlunos(obj, e))[0],
  };
};

console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
