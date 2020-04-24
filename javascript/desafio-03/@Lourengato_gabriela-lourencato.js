function surprise (number) {
  let result = []
  let toArray, sorted = 0
  number = (typeof number === 'string' ? parseInt(number) : number)

  if (number >= 6 && number <= 15 ){
      for (i = 0; i < number; i++) {
        sorted = Math.floor((60 - 1) * Math.random())
        toArray = result.find(function(element) {
          return element === sorted
        })
        if (toArray === undefined){
          result.push(sorted)
        }
      }
      return result.sort(function (a, b) {  return a - b;  })
  } else {
      return 'Por favor informe um número válido'
  }
}

console.log(surprise(6))
console.log(surprise(7))
console.log(surprise(10))