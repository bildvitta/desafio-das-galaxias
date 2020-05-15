function primo(limite) {
  if (limite < 2) {
    return []
  }

  if (limite === 2) {
    return [2]
  }

  let resposta = [2]
  
  for(let index = 3; index <= limite; index++){   
    if(testePrimo(index)){
      resposta.push(index)
    }  
  }
  return resposta
}

function testePrimo(index) {
  for(let divisor = 2; divisor < index; divisor++){
    if(index % divisor === 0){
      return false
    }
  }
  return true
}

console.log(primo(1))
console.log(primo(2))
console.log(primo(3))
console.log(primo(5))
console.log(primo(10))
console.log(primo(100))