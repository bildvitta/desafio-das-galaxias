
function maioriaDosVotos (votos = []) {
  return votos.find(voto => votos.join('').match(new RegExp(voto, 'g')).length > votos.join('').length / 2)
}

console.log(maioriaDosVotos(["A", "A", "B"]))
// retorna "A"

console.log(maioriaDosVotos(["A", "A", "A", "B", "C", "A"]))
// retorna "A"

console.log(maioriaDosVotos(["A", "B", "B", "A", "C", "C"]))
// retorna null