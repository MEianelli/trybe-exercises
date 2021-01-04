const greetPeople = people => {
  let greeting = 'Hello ';

  return people.map(e => `${greeting}${e}`);
};

module.exports = greetPeople;
