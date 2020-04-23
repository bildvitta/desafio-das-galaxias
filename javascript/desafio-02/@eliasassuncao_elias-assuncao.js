function multiply (arrays) {
  if (Array.isArray(arrays)) {
      arrays.forEach((array, indexArrays) => {
        if (Array.isArray(array)) {
          var oddNumber = array.find(number => number % 2 === 1)
  
          array.forEach((number, indexNumber) => {
            if (number % 2 == 0 && oddNumber) {
              arrays[indexArrays][indexNumber] = number * oddNumber
            }
          })
        }
      })
  }
  
  return arrays
}

console.log(multiply([[1, 3, 4], [5, 6], [0, 1]]))
console.log(multiply([[1, 3, 4], [5, 6], [0, 1]]))
console.log(multiply([[0, 2, 7], [5, 1], [2, 0]]))
console.log(multiply([[0, 1], 5, [2, 0]]))
console.log(multiply(5))