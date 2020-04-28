// Multiplicar pelo index e somar números do array
// On Codepen: https://codepen.io/plowzzer/pen/rNOwWwG

function indexMultiplier(array) {
  let sum = 0;
  array.forEach((num, index) => {
    sum += num * index;
  });
  return sum;
}

console.log(indexMultiplier([1, 2, 3, 4, 5]));
console.log(indexMultiplier([-3, 0, 8, -6]));
