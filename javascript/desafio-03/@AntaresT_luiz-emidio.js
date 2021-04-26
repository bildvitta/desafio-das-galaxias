function surpresinha (userInput) {
  var numerosDaSorte = []
  if (userInput > 5 && userInput < 16){
    for(i = 0; i < userInput; i++){
      numerosDaSorte.push(Math.floor(Math.random() * (60 - 1) + 1))
    }
  }
  else if (userInput == null) {
    for(i = 0; i < 6; i++){
      numerosDaSorte.push(Math.floor(Math.random() * ((60 - 1) + 1) ))
    }
  }else{
    return "Error [Informe um valor entre 6 e 15.]"
  }  
  return (numerosDaSorte.sort(compareNumbers))
}

function compareNumbers (initial, next) {
  if (initial > next) return 1
  if (initial < next) return -1
  return 0
}

console.log(surpresinha())
console.log(surpresinha('10'))
console.log(surpresinha(5))
console.log(surpresinha(16))