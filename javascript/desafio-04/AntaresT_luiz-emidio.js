function maioriaDosVotos (numeros) {
  var todos = (vetor, item) => 
  vetor.reduce((total, numero) => item === numero ? total+1 : total, 0)
  for(i = numeros.length-1; i >= 0; i--){
    var contador = todos(numeros, numeros[i])
    var maiorOcorrencia = numeros[i]
  }
  if(contador > numeros.length / 2){
    return maiorOcorrencia
  }else{
    return null
  }
}

maioriaDosVotos(['A', 'A', 'B'])
// retorna 'A'

maioriaDosVotos(['A', 'A', 'A', 'B', 'C', 'A'])
// retorna 'A'

maioriaDosVotos(['A', 'B', 'B', 'A', 'C', 'C'])
// retorna null