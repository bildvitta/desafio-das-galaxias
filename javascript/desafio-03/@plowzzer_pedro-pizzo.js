// Desafio 3: Gerando surpresinha da Mega-Sena
// On Codepen: https://codepen.io/plowzzer/pen/rNOjMwG

function surpresinha(qnt) {
  if (qnt < 6 || qnt > 15) {
    return "Error [Informe um valor entre 6 e 15.]";
  }

  var i = 0;
  const array = [];

  while (i < (qnt === undefined ? 6 : qnt)) {
    const num = Math.floor(Math.random() * 60) + 1;
    if (!array.find((e) => e === num)) {
      array.push(num);
      i++;
    }
  }

  return array.sort(sortNumber);
}

function sortNumber(a, b) {
  return a - b;
}

console.log(surpresinha());
// retorna [10, 20, 30, 40, 50, 60]

console.log(surpresinha("10"));
// retorno: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(surpresinha(5));
console.log(surpresinha(16));
// retorno: Error [Informe um valor entre 6 e 15.]
