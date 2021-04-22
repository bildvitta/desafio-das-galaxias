function multiply (...matriz) {
  var newMatriz = []
  for (let count = matriz.length - 1, i = 0; count >= 0; count--, i++) {
    if (!Array.isArray(matriz[i])) continue
    var primeiroImpar = matriz[i].find(item => item % 2 == 1) || 1
    let resultado = []
    for (let valor of matriz[i]) {
      let novoValor = valor
        if (valor % 2 == 0) {
          novoValor = valor * primeiroImpar
        }
      resultado.push(novoValor)
    }
    newMatriz.push(resultado)
  }
  return newMatriz
}

console.log(multiply([1, 3, 4], [5, 6], [0, 1]))

console.log(multiply([0, 2, 7], [5, 1], [2, 0]))

console.log(multiply([0, 1], 5, [2, 0]))

console.log(multiply(5))