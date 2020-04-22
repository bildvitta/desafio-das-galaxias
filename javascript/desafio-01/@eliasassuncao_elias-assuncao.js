function binaryToDecimal (binary) {
  binary = binary.toString()
  let total = 0
  let power = Object.keys(binary).length - 1 //4

  Object.keys(binary).map(currentNumber => {
      // total = total + 1 * 2^4
      // total = total + 1 * 2^3
      // ...
      total += Number(binary[currentNumber]) * Math.pow(2, power)
      power--
  })
  
  return total
}

console.log(binaryToDecimal('1110')) 
console.log(binaryToDecimal(1110)) 