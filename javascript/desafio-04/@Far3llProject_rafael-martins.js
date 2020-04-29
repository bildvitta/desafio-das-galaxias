function maioriaDosVotos (votos = []) {
  return votos.find(value => votos.filter(value2 => value === value2).length > votos.length / 2) || null
}

console.log(maioriaDosVotos(["A", "A", "A", "B", "C", "A"])) // "A"
console.log(maioriaDosVotos(["A", "B", "B", "A", "C", "C"])) // "Null"
console.log(maioriaDosVotos(["A", "B", "B"])) // B
