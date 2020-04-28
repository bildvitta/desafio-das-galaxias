function maioriaDosVotos (values = []) {
  return values.find(value => values.filter(value2 => value === value2).length > values.length / 2) || null
}

console.log(maioriaDosVotos(["A", "A", "A", "B", "C", "A"]))
console.log(maioriaDosVotos(['mari', 'marina', 'mariana', 'mariana', 'mariana']) )
console.log(maioriaDosVotos(["A", "B", "B", "A", "C", "C"]))
// // retorna null