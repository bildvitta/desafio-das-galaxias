const numbers = [1,2,3,4,5]
const numbers2 = [-3,0,8,-6]
const numbers3 = []

// Criar função que multiplica o index pelo elemento e soma todos os elementos
function multiplyIndex (numbers) {
  if(numbers.length === 0){
    return 0
  }
  // Primeiro multiplico os elementos pelo seus index 
  const value = numbers.map(arg => numbers.indexOf(arg) * arg) 
  //console.log(value)
  //Depois uso o reduce para somar todos os valores
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  return value.reduce(reducer)
}

console.log(multiplyIndex(numbers))
console.log(multiplyIndex(numbers2))
console.log(multiplyIndex(numbers3))
