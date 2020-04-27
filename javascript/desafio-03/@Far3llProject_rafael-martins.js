function surpersinha(aposta){
  
  if(aposta < 6 || aposta > 15){
    let alerta = "escolha entre 6 e 15"
    return alerta
  }
 
  const qtdAposta = new Array()
  
  for(let i = 1; i <= aposta; i++){
    const numeroSorteio = Math.floor(Math.random() * 59 + 1)
    let repetido = qtdAposta.includes(numeroSorteio)
    
  if(repetido == false){
      qtdAposta.push(numeroSorteio)
    }else{
      i--
     }
  }
  return qtdAposta.sort( (a,b) => a-b)
}

console.log(surpersinha("6"))
