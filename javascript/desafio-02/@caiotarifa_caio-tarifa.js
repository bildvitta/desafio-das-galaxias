// https://jsbin.com/mugabegase/edit?js,console

const multiply = (...list) => list.reduce((accumulator, currentValue) => {
  if (Array.isArray(currentValue)) {
    if (firstOdd = currentValue.find(value => value % 2)) {
      currentValue = currentValue.map(value => value % 2 ? value : value * firstOdd)
    }
    
    accumulator.push(currentValue)
  }

  return accumulator
}, [])

console.log(
  multiply([1, 3, 4], [5, 6], [0, 1]),
  multiply([0, 2, 7], [5, 1], [2, 0]),
  multiply([0, 1], 5, [2, 0]),
  multiply(5)
)
