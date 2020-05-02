function primeNumbers (number) {
  if (number < 2) {
    return []
  }

  if (number === 2) {
    return [2]
  }

  const primeList = [2]

  for (let index = 3; index <= number; index++) {
    let divisorCounter = 0

    for (let secondeIndex = 1; secondeIndex <= index; secondeIndex++) {
      if (!(index % secondeIndex)) {
        divisorCounter++
      }
    }

    if (divisorCounter === 2) {
      primeList.push(index)
    }
  }
  
  return primeList
}

console.log(primeNumbers(0))
// retorna []

console.log(primeNumbers(1))
// retorna []

console.log(primeNumbers(2))
// retorna [2]

console.log(primeNumbers(3))
// retorna [2, 3]

console.log(primeNumbers(5))
// retorna [2, 3, 5]

console.log(primeNumbers(10))
// retorna [2, 3, 5, 7]

console.log(primeNumbers(100))
// retorna [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

console.log(primeNumbers(1000))