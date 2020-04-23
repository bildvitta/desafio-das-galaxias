function converter(binario){
  binario = binario.toString().split('')
  let expoente = binario.length - 1 
  let resultado = 0
  
 for(let i = 0; i < binario.length; i++){
   if (Number(binario[i] > 1)) {
     return null
   }
   resultado += Math.pow(2, expoente) * Number(binario[i])
   expoente--
   console.log(expoente)
 }
  return resultado
}

console.log(converter('111'))

