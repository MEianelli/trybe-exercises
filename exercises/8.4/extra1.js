const sameProperties = (obj1, obj2) => {
  return Object.keys(obj1).every((e) => Object.keys(obj2).includes(e));
};

const obj1 = { name: 'joj', id: 'mop', last: 'k' };
const obj2 = { name2: 'joaj', id: 'msssop', last: 'ks' };

console.log(obj1, Object.keys(obj1));
console.log(obj2, Object.keys(obj2));
console.log(sameProperties(obj1, obj2));
