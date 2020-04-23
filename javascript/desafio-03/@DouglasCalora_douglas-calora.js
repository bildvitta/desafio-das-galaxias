function littleSurprise (length = 6) {
  length = typeof length === 'number' ? length : Number(length)

  if (length < 6 || length > 15) {
    return 'Error [Informe um valor entre 6 e 15.]'
  }

  const surprise = []

  for (let index = 1; index <= length; index++) {
    const randomValue = random()

    if (!surprise.includes(randomValue)) {
      surprise.push(randomValue)
    } else {
      index--
    }
  }

  return sort(surprise)
}

function random (min = 1, max = 60) {
  return Math.floor(Math.random() * (max - min)) + min
}

function sort (list) {
  return list.sort((first, second) => first - second)
}

console.log(littleSurprise())
// retorna [10, 20, 30, 40, 50, 60]

console.log(littleSurprise('10'))
// retorno: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(littleSurprise(5))
console.log(littleSurprise(16))
// retorno: Error [Informe um valor entre 6 e 15.]