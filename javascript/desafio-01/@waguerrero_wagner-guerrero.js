function binaryToDecimal (binary) {
  binary = (typeof binary !== "string" ? binary.toString() : binary )
  let result = 0
  
  for (index in binary) {
    result = result + (binary[index] != 0 ? binary[index] * Math.pow(2, (binary.length - index -1)) : 0)     
  }
  return result
}

console.log(binaryToDecimal(1110), "number")
console.log(binaryToDecimal('101101010101'), "string")