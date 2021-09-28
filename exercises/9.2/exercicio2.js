function generateArray() {
  return new Promise((resolve, reject) => {
    const randomArray1to50 = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber1to50 = Math.floor(Math.random() * 50) + 1;
      randomArray1to50.push(randomNumber1to50);
    }
    const sum = randomArray1to50.map(e => e ** 2).reduce((acc, curr) => acc + curr);

    if (sum < 8000) {
      resolve(sum);
    }
    reject();
  });
}

function divideByNumbers() {
  const divisors = [2, 3, 5, 10];
  let answer;
  const sum = generateArray()
    .then(result => divisors.map(e => Math.floor((result / e) * 100) / 100))
    .catch(err => `É mais de oito mil! Essa promise deve estar quebrada!`)
    .then(r => {
      console.log(r);
      return r;
    })
    .then(r => {
      if (typeof r !== 'string') {
        console.log(r.reduce((acc, curr) => acc + curr));
      }
    });
}

divideByNumbers();
