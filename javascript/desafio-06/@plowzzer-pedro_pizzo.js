// Casa de Palito
// On Codepen: https://codepen.io/plowzzer/pen/bGVRZZa

function matchHouses(num) {
  if (num < 0) {
    return "Número casas deve ser maior que 0";
  }
  if (num === 0) {
    return 0;
  }
  return 6 + 5 * (num - 1);
}

console.log(matchHouses(1));
// return 6

console.log(matchHouses(4));
// return 21

console.log(matchHouses(87));
// return 436
