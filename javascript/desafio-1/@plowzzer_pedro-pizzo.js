// Binary to Decimal
// On codepen: https://codepen.io/plowzzer/pen/NWGNjOK

function binaryToDecimal(number) {
  const binary = String(number).split("");
  const binaryReverse = binary.reverse();
  let sum = 0;

  binaryReverse.forEach((b, index) => {
    sum = sum + binaryReverse[index] * Math.pow(2, index);
  });

  return sum;
}

function howTo(number) {
  const binary = String(number).split("");
  const binaryReverse = binary.reverse();
  let string = "";

  binaryReverse.forEach((b, index) => {
    string += `( ${binaryReverse[index]} * 2 ^ ${Math.pow(2, index)} )`;
    if (index !== binaryReverse.length - 1) {
      string += ` + `;
    }
  });

  return string;
}

console.log(howTo(1110));
console.log(binaryToDecimal(1110));
console.log(howTo(101101010101));
console.log(binaryToDecimal(101101010101));
