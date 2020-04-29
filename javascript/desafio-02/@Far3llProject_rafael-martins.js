function multiply (...args) {
  return args.filter(item => Array.isArray(item)).map(args => {
    const odd = args.find(oddNumber => isOdd(oddNumber)) || 1
    return args.map(number => !isOdd(number) ? number * odd : number )
  }) 
}
function isOdd (number){
  return (number % 2) > 0
}

console.log(multiply([1, 3, 4], [5, 6], [0, 1]))
console.log(multiply([0, 2, 7], [5, 1], [2, 0]))
console.log(multiply([0, 1], 5, [2, 0]))
console.log(multiply(5))
console.log(multiply([0, 2], 4, [6, 8]))