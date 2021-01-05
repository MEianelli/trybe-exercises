const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = type =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter(animal => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  });

const getListAnimals = type => findAnimalsByType(type).then(list => list);

const findAnimalsByAge = age =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter(animal => animal.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject('Nennhum animal com essa idade');
    }, 100);
  });

const getListAge = age => findAnimalsByAge(age).then(list => list);

const findAnimalByName = name =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find(animal => animal.name === name);
      if (animal !== undefined) {
        return resolve(animal);
      }

      return reject('Nenhum animal com esse nome!');
    }, 100);
  });

const getAnimal = name => findAnimalByName(name).then(animal => animal);

// ---------------------

describe('Testando promise - findAnimalsByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getListAge(2).then(animal => {
        expect(animal).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getListAge(100).catch(error => expect(error).toEqual('Nennhum animal com essa idade'));
    });
  });
});

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error => expect(error).toEqual('Nenhum animal com esse nome!'));
    });
  });
});
