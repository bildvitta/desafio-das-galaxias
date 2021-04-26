function surpresinha (userInput = 6) {
  const numerosDaSorte = []
  userInput = Number(userInput)
  if (userInput < 6 || userInput > 15){
    return "Error [Informe um valor entre 6 e 15.]"
  }
  for(i = 0; i < userInput; i++){
    const randomInter = Math.floor(Math.random() * (60 - 1) + 1 )
    numerosDaSorte.includes(randomInter)? i-- : numerosDaSorte.push(randomInter)
  }  
  return (numerosDaSorte.sort((first, second) => first - second ))
}

console.log(surpresinha())
console.log(surpresinha('10'))
console.log(surpresinha(5))
console.log(surpresinha(16))