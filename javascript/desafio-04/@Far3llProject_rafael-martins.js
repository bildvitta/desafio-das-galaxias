function maioriaDosVotos (votos = []) {
  return votos.find(voto => votos.filter(elemento => voto === elemento).length > votos.length / 2) || null
}

console.log(maioriaDosVotos(["A", "A", "A", "B", "C", "A"])) // "A"
console.log(maioriaDosVotos(["A", "B", "B", "A", "C", "C"])) // "Null"
console.log(maioriaDosVotos(["A", "B", "B"])) // B