function indexMultiplier (arr) {
  return arr.reduce((sum, current, index) => sum + (current * index), 0)
}


console.log(indexMultiplier([1, 2, 3, 4, 5]))
// retorna (1*0 + 2*1 + 3*2 + 4*3 + 5*4) ➞ 40

console.log(indexMultiplier([-3, 0, 8, -6]))
// retorn (-3*0 + 0*1 + 8*2 + -6*3) ➞ -2