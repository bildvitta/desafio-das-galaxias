// https://jsbin.com/recumiyipa/edit?js,console

function surpresinha (places = 6) {
  places = parseInt(places)

  if (places < 6 || places > 15) {
    throw new Error('Informe um valor entre 6 e 15.')
  }

  const numbers = []

  while (numbers.length < places) {
    const random = Math.floor(Math.random() * 60) + 1
    if (!numbers.includes(random)) { numbers.push(random) }
  }

  return numbers.sort((first, second) => first - second)
}

console.log(surpresinha())
console.log(surpresinha('10'))
console.log(surpresinha(5))
console.log(surpresinha(16))
