/*      | I   | 1    |
     | --- | ---- |
     | IV  | 4    |
     | V   | 5    |
     | IX  | 9    |
     | X   | 10   |
     | XL  | 40   |
     | L   | 50   |
     | XC  | 90   |
     | C   | 100  |
     | CD  | 400  |
     | D   | 500  |
     | CM  | 900  |
     | M   | 1000 | */

//1839 = MDCCCXXXIX
//1838 = MDCCCXXXVIII
/*
XIV = 14
MMMCDLVI = 3456
MMXX = 2020
MMCCCXLVIII = 2348
*/

function converteRomanos(s) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let conv = s.split("").map((e) => {
    for (let i in romanos) {
      return romanos[e];
    }
  });

  let total = 0;
  for (let i = 0; i < conv.length; i++) {
    if (i + 1 < conv.length) {
      if (conv[i + 1] > conv[i]) {
        total += conv[i + 1] - conv[i];
        i++;
      } else {
        total += conv[i];
      }
    } else {
      total += conv[i];
    }
  }

  return total;
}

console.log(converteRomanos("MDCCCXXXIX"));
console.log(converteRomanos("MDCCCXXXVIII"));
console.log(converteRomanos("XIV"));
console.log(converteRomanos("MMMCDLVI"));
console.log(converteRomanos("MMXX"));
console.log(converteRomanos("MMCCCXLVIII"));
