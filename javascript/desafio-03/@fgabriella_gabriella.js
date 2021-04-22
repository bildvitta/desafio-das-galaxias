function getSurpresinha(bet) {
  if (bet < 6 || bet > 15) {
    let error = "Por favor, escolha de 6 até 15 números!"
    return error
  }

  let surpresinha = []

  for (let j = 0; j < bet; j++) {
    let number = Math.floor(Math.random() * (60 - 1) + 1)

    if (!surpresinha.includes(number)) {
      surpresinha.push(number)
    } else {
      j--
    }
  }
  return surpresinha.sort((a, b) => a-b)
}

console.log(getSurpresinha("6"))